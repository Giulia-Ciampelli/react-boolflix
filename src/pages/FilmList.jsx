import { useContext } from "react";

// context
import CallResultsContext from "../contexts/CallResultsContext.jsx";
import Flag from "react-world-flags";

export default function FilmList() {
    const { movies } = useContext(CallResultsContext); // variabile accesso a context

    // mappa le bandiere (oggetto iniziale?)
    const languageFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
        ru: 'ru',
        zh: 'cn',
        de: 'de',
        cs: 'cz',
        es: 'es'
    }

    return (
        <>
            <h1>
                Film trovati:
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