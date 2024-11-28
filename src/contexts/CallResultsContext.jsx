import { createContext, useState, useEffect } from "react";

// crea un context
const CallResultsContext = createContext();

// componente provider
export const CallResultsProvider = ({ children }) => {
    const [movies, setMovies] = useState([]); // variabile fetch
    const [query, setQuery] = useState(''); // variabile query
    const url = import.meta.env.VITE_BASE_URL;

    // funzione per query
    const setQueryInContext = (newQuery) => {
        setQuery(newQuery); // aggiornamento stato query
    }

    // cerca come rendere sia /movie che /tv

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
        <CallResultsContext.Provider value={{ movies, setQueryInContext }}>
            {children}
        </CallResultsContext.Provider>
    )
}

export default CallResultsContext;