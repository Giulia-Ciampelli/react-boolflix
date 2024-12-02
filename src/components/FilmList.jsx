import { useContext } from "react";

// context
import CallResultsContext from "../contexts/CallResultsContext.jsx";

// componenti
import Banner from "./Banner.jsx";
import FilmCard from "../components/FilmCard.jsx";

export default function FilmList() {
    const { movies } = useContext(CallResultsContext); // variabile accesso a context
    const { searchType, query } = useContext(CallResultsContext); // variabile cambio tipo

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

                    {movies.map((movie) => (
                        <FilmCard key={movie.id} movie={movie} searchType={searchType} />
                    ))}
                </div>
            </div>
            {/* <Link to={FilmCard}>
                filmCard
            </Link> */}
        </>
    )
}