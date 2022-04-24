import { Login } from "./Login"

export const SideBar = (props)=>{
    return(
        <div className="sideBar">
            <Login user={props.user} singIn={props.singIn}/>
        </div>
    );
}