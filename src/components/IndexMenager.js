import { Header } from "./Header"
import { Main } from "./Main"

export const IndexMenager = (props) =>{

    return(
        <div className="indexMenager">
            <Header  user={props.user} singIn={props.singIn}/>
            <Main posts={props.posts}  setPage={props.setPage} user={props.user} singIn={props.singIn}/>
        </div>
    );
}