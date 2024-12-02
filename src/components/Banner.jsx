import { useContext } from "react";

// context
import CallPopularsContext from "../contexts/CallPopularsContext.jsx";

// stile
import style from '../components/Banner.module.css';

// icone
import Flag from "react-world-flags";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons"; // stella piena
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; // stella vuota

export default function Banner() {
    const { populars } = useContext(CallPopularsContext);
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

    return (
        <section className={style.banner}>
            <h1>
                Most popular movies:
            </h1>
            <div className={style.row}>

                {populars.map(popular => {

                    // calcolo per voto
                    const starVote = Math.ceil(popular.vote_average / 2);

                    // calcolo stelle vuote
                    const emptyStars = 5 - starVote;

                    return (<div className={style.card} key={popular.id}>
                        <div className={style.poster}>
                            <img src={`${imgUrl}${popular.poster_path}`} alt={popular.title} />
                        </div>
                        <div className={style.description}>
                            <p>
                                Title: {popular.title}
                            </p>
                            <p>
                                Original title: {popular.original_title}
                            </p>
                            <p>
                                Language: <Flag code={languageFlags[popular.original_language]} style={{ height: 12 }} />
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
                                Total votes: {popular.vote_count}
                            </p>
                            <p>
                                Overview: {popular.overview ? popular.overview : 'not available'}
                            </p>
                        </div>
                    </div>)
                })}
            </div>
        </section>
    )
}