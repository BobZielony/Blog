import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export const Login = (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const signOutUser = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        });
    }
    let display;
    if (props.user == null) {
        display = <button className="login_button" onClick={props.singIn}>Zaloguj się!</button>;
    }
    else {
        display = <span>Zalogowany jako: <span className='user'>{props.user.displayName}</span><button className="logout_button" onClick={signOutUser}>Wyloguj sie</button></span>
    }
    return (
        <div className="loginWindow">
            {display}
        </div>
    );
}