import { createContext, useState, useEffect } from "react";

// crea un context
const CallMovieContext = createContext();

// componente provider
export const CallMovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]); // variabile fetch
    const [query, setQuery] = useState(''); // variabile query
    const url = import.meta.env.VITE_BASE_URL;

    // funzione per query
    const setQueryInContext = (newQuery) => {
        setQuery(newQuery); // aggiornamento stato query
    }

    useEffect(() => {
        if(query === '') return;

        // funzione fetch con valore query
        fetch(`${url}&query=${query}`)
            .then(res => res.json())
            .then(data => { setMovies(data.results) })
            .catch(err => {
                console.log(err);
            })
    }, [query])

    // ritorna il provider con cui incapsulare l'app (o i componenti dell'app)
    return (
        <CallMovieContext.Provider value={{ movies, setQueryInContext }}>
            {children}
        </CallMovieContext.Provider>
    )
}

export default CallMovieContext;