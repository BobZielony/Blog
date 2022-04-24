import { SideBar } from "./SideBar"
export const Header = (props) => {
    return (
        <div className="header">
            <SideBar user={props.user} singIn={props.singIn} />
            <p>Blog o tematyce różnej</p>
        </div>
    )
}