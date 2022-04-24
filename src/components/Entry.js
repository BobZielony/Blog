
import React from 'react';

export const Entry = () => {

    return (
        <div className="entry">
            <div className="art_user">
                Uzytkownik
            </div>
            <div className="art_content">
                <div>
                    <img alt="Zdjecie"></img>
                </div>
                <span className="title">Tytul</span>
                <div className="entry_content">Zawartosc</div>
                <div className="deletePost">
                    {(
                        <button className='deleteButton'>
                            Usun Post
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}