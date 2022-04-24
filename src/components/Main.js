import { Entry } from "./Entry"

export const Main = () => {

    return (
        <div className="mainPage">
            <div className="entryArray">


                <Entry post={['uzytkownik', 'tytul', 'zawartosc', 'zdjecie']} />

                <button >Nowy wpis</button>
            </div>
        </div>
    )
}