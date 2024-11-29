import { useContext } from "react";

// context
import CallResultsContext from "../contexts/CallResultsContext.jsx";
import Flag from "react-world-flags";

export default function FilmList() {
    const { movies } = useContext(CallResultsContext); // variabile accesso a context
    const {searchType} = useContext(CallResultsContext); // variabile cambio tipo

    // mappa bandiere
    const languageFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
        ru: 'ru',
        zh: 'cn',
        de: 'de',
        cs: 'cz',
        es: 'es',
        ko: 'kr',
        ta: 'in',
        sv: 'se',
        nl: 'nl'
    }

    // test per array
    if(!Array.isArray(movies)) {
        return <div>
            Nessun risultato
        </div>
    }

    return (
        <>
            <h1>
                {searchType === 'movie' ? 'Film trovati:' : 'Serie TV trovate:'}
            </h1>
            <ul>
                {movies.map(movie => (<li key={movie.id}>
                    <p>
                        Titolo: {searchType === 'movie' ? movie.title : movie.name}
                    </p>
                    <p>
                        Titolo originale: {searchType === 'movie' ? movie.original_title : movie.original_name}
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