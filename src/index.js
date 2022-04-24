import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IndexMenager } from "./components/IndexMenager"
import { PostSubmit } from './components/PostSubmit';
import { auth, colRef, provider } from './firebase-config';
import { getDocs } from 'firebase/firestore';
import { signInWithPopup } from 'firebase/auth';


const CurrentPage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);


  useEffect(() => {
    setDataBaseValues();
  }, [])

  function SetPage(pageId) {
    setPage(pageId);
  }

  function singIn() {

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        localStorage.setItem("isAuth", true);
        setUser(user);
      })
  }


  function setDataBaseValues() {
    getDocs(colRef)
      .then((snapshot) => {
        let docs = []
        snapshot.docs.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        })
        setPosts(docs);
      })
      .catch(err => {
        console.log(err);
      })
  }


  let display;
  switch (page) {
    case 0:
      display = <IndexMenager posts={posts} setPage={SetPage} user={user} singIn={singIn} />
      break;
    case 1:
      display = <PostSubmit setPage={SetPage} user={user} />
      break;
    default:
      break;
  }

  return (
    <div>
      {display}
    </div>

  )

}


ReactDOM.render(
  <CurrentPage />,
  document.getElementById('root')
);

