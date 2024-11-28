import { useContext } from "react";

// context
import CallMovieContext from "../contexts/CallMovieContext.jsx";
import Flag from "react-world-flags";

export default function FilmList() {
    const { movies } = useContext(CallMovieContext); // variabile accesso a context

    // mappa le bandiere (oggetto iniziale?)
    const languageFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
        ru: 'ru'
    }

    return (
        <>
            <h1>
                Qui sarà la lista dei film
            </h1>
            <ul>
                {movies.map(movie => (<li key={movie.id}>
                    <p>
                        Titolo: {movie.title}
                    </p>
                    <p>
                        Titolo originale: {movie.original_title}
                    </p>
                    <p>
                        {/* sostituisci con flag, togli lo style dopo */}
                        Lingua: {movie.original_language}
                        Lingua: <Flag code={languageFlags[movie.original_language]} style={{height: 20}}/>
                    </p>
                    <p>
                        Voto: {movie.vote_average}
                    </p>
                </li>))}
            </ul>
            {/* <Link to={FilmCard}>
                filmCard
            </Link> */}
        </>
    )
}