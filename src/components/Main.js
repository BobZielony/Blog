import { Entry } from "./Entry"

export const Main = (props) => {

    return (
        <div className="mainPage">
            <div className="entryArray">
                {props.posts.map((post, i) => {

                    return <Entry post={post} key={i} />
                })}
                <button onClick={() => {
                    if (props.user == null) {
                        alert("Musisz się zalogować!");
                    }
                    else {
                        props.setPage(1)
                    };
                }
                }>Nowy wpis</button>
            </div>
        </div>
    )
}