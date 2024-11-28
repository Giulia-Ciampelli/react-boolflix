// import { Link } from "react-router-dom";
import { useContext } from "react";

// context
import CallMovieContext from "../contexts/CallMovieContext.jsx";

export default function FilmList() {
    const { movies } = useContext(CallMovieContext); // variabile accesso a context

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
                        Lingua: {movie.original_language}
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