
import React, { useState, useEffect } from 'react';


import { colRef } from '../firebase-config';
import { getDocs } from 'firebase/firestore';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

export const Entry = (props) => {

    console.log();
    const [postLists, setPostList] = useState([]);
    const postsCollection = colRef;

    const deletePost = async (id) => {
        const postDoc = doc(db, "posty", id);
        await deleteDoc(postDoc);
    };
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollection);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        
        getPosts();
    }, [deletePost]);
    return (
        <div className="entry">
            <div className="art_user">
                {props.post.user}
            </div>
            <div className="art_content">
                <div>
                    <img src={props.post.image} alt="image"></img>
                </div>
                <span className="title">{props.post.title}</span>
                <div className="entry_content">{props.post.content}</div>
                <div className="deletePost">
                    {(
                        <button className='deleteButton'
                            onClick={() => {
                                deletePost(props.post.id);
                            }}
                        >
                            Usun Post
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}