import { useContext } from "react";

// context
import CallResultsContext from "../contexts/CallResultsContext.jsx";

// icone
import Flag from "react-world-flags";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons"; // stella piena
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; // stella vuota

// componenti
import Banner from "../components/Banner.jsx";

export default function FilmList() {
    const { movies } = useContext(CallResultsContext); // variabile accesso a context
    const { searchType, query } = useContext(CallResultsContext); // variabile cambio tipo
    const imgUrl = 'https://image.tmdb.org/t/p/w342'; // variabile url immagine

    // mappa bandiere
    const languageFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
        ru: 'ru',
        zh: 'cn',
        cn: 'cn',
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

    const bannerDisplay = query === '';
    const titleDisplay = query !== '';

    // ricorda di mettere il banner da qualche parte

    return (
        <>
            <div className="container">
                {bannerDisplay && <Banner />}

                {/* RICORDA: modifica quando farai le rotte */}
                {titleDisplay &&
                    (<h1>
                        {searchType === 'movie' ? 'Movies found:' : 'TV Series found:'}
                    </h1>)}
                <div className="row">

                    {movies.map(movie => {

                        // calcolo per voto
                        const starVote = Math.ceil(movie.vote_average / 2);

                        // calcolo stelle vuote
                        const emptyStars = 5 - starVote;

                        return (<div className="card" key={movie.id}>
                            <div className="poster">
                                <img src={`${imgUrl}${movie.poster_path}`} alt={searchType === 'movie' ? movie.title : movie.name} />
                            </div>
                            <div className="description">
                                <p>
                                    Title: {searchType === 'movie' ? movie.title : movie.name}
                                </p>
                                <p>
                                    Original title: {searchType === 'movie' ? movie.original_title : movie.original_name}
                                </p>
                                <p>
                                    Language: <Flag code={languageFlags[movie.original_language]} style={{ height: 12 }} />
                                </p>
                                <p>
                                    Vote:

                                    {/* rendering stelle piene */}
                                    {Array.from({ length: starVote }).map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStarFull} style={{ color: "#FFD43B", }} />
                                    ))}

                                    {/* rendering stelle vuote */}
                                    {Array.from({ length: emptyStars }).map((_, index) => (
                                        <FontAwesomeIcon key={starVote + index} icon={faStarEmpty} style={{ color: "#FFD43B", }} />
                                    ))}
                                </p>
                                <p>
                                    Total votes: {movie.vote_count}
                                </p>
                                <p>
                                    Overview: {movie.overview ? movie.overview : 'not available'}
                                </p>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
            {/* <Link to={FilmCard}>
                filmCard
            </Link> */}
        </>
    )
}