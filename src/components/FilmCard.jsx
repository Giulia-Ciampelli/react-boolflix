// icone
import Flag from "react-world-flags";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons"; // stella piena
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; // stella vuota

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

export default function filmCard({ movie, searchType }) {
    const imgUrl = 'https://image.tmdb.org/t/p/w342'; // variabile url immagine

    // calcolo per voto
    const starVote = Math.ceil(movie.vote_average / 2);

    // calcolo stelle vuote
    const emptyStars = 5 - starVote;

    return (
        <div className="card">
            <div className="poster">
                <img
                    src={`${imgUrl}${movie.poster_path}`}
                    alt={searchType === 'movie' ? movie.title : movie.name}
                />
            </div>
            <div className="description">
                <p>Title: {searchType === 'movie' ? movie.title : movie.name}</p>
                <p>Original title: {searchType === 'movie' ? movie.original_title : movie.original_name}</p>
                <p>
                    Language:
                    <Flag code={languageFlags[movie.original_language]} style={{ height: 12 }} />
                </p>
                <p>
                    Vote:
                    {/* Rendering full stars */}
                    {Array.from({ length: starVote }).map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStarFull} style={{ color: "#FFD43B" }} />
                    ))}
                    {/* Rendering empty stars */}
                    {Array.from({ length: emptyStars }).map((_, index) => (
                        <FontAwesomeIcon key={starVote + index} icon={faStarEmpty} style={{ color: "#FFD43B" }} />
                    ))}
                </p>
                <p>Total votes: {movie.vote_count}</p>
                <p>Overview: {movie.overview || 'Not available'}</p>
            </div>
        </div>
    )
}