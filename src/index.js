import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IndexMenager } from "./components/IndexMenager"




const CurrentPage = () => {



  let display;

  display = <IndexMenager />


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

