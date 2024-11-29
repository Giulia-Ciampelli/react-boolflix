import { useContext } from "react";

// context
import CallResultsContext from "../contexts/CallResultsContext.jsx";
import Flag from "react-world-flags";

// icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons"; // stella piena
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; // stella vuota

export default function FilmList() {
    const { movies } = useContext(CallResultsContext); // variabile accesso a context
    const { searchType } = useContext(CallResultsContext); // variabile cambio tipo
    const imgUrl = 'https://image.tmdb.org/t/p/w500'; // variabile url immagine

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
    if (!Array.isArray(movies)) {
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
                {movies.map(movie => {

                    // calcolo per voto
                    const starVote = Math.ceil(movie.vote_average / 2);

                    // calcolo stelle vuote
                    const emptyStars = 5 - starVote;

                    return (<li key={movie.id}>
                        <p>
                            Titolo: {searchType === 'movie' ? movie.title : movie.name}
                        </p>
                        <p>
                            Titolo originale: {searchType === 'movie' ? movie.original_title : movie.original_name}
                        </p>
                        <p>
                            {/* sostituisci con flag, togli lo style dopo */}
                            Lingua: {movie.original_language}
                            Lingua: <Flag code={languageFlags[movie.original_language]} style={{ height: 20 }} />
                        </p>
                        <p>
                            Voto:

                            {/* rendering stelle piene */}
                            {Array.from({ length: starVote }).map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStarFull} style={{ color: "#FFD43B", }} />
                            ))}

                            {/* rendering stelle vuote */}
                            {Array.from({ length: emptyStars }).map((_, index) => (
                                <FontAwesomeIcon key={starVote + index} icon={faStarEmpty} style={{ color: "#FFD43B", }} />
                            ))}
                        </p>
                        <div className="copertina">
                            <img src={`${imgUrl}${movie.poster_path}`} alt={searchType === 'movie' ? movie.title : movie.name} />
                        </div>
                    </li>)
                })}
            </ul>
            {/* <Link to={FilmCard}>
                filmCard
            </Link> */}
        </>
    )
}