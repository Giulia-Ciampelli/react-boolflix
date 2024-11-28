// import { Link } from "react-router-dom";
import { useContext } from "react";

// context
import CallMovieContext from "../contexts/CallMovieContext.jsx";

export default function FilmList() {
    const {movies} = useContext(CallMovieContext); // variabile accesso a context

    return (
        <>
            <h1>
                Qui sarà la lista dei film
            </h1>
            <ul>
                {movies.map(movie => (<li key={movie.id}>
                    {movie.title}
                </li>))}
            </ul>
            {/* <Link to={FilmCard}>
                filmCard
            </Link> */}
        </>
    )
}