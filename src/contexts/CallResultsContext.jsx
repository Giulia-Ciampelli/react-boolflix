import { createContext, useState, useEffect } from "react";

// crea un context
const CallResultsContext = createContext();

// componente provider
export const CallResultsProvider = ({ children }) => {
    const [movies, setMovies] = useState([]); // variabile fetch
    const [query, setQuery] = useState(''); // variabile query
    const [searchType, setSearchType] = useState('movie'); // variabile scelta rotta
    const url = import.meta.env.VITE_BASE_URL;
    const movieRoute = 'movie';
    const seriesRoute = 'tv';
    const key = import.meta.env.VITE_API_KEY;

    // funzione per query
    const setQueryInContext = (newQuery) => {
        setQuery(newQuery); // aggiornamento stato query
    }

    // funzione per cambio categoria
    const changeSearchType = (type) => {
        setSearchType(type);
    }

    useEffect(() => {
        if (query === '') return;

        const route = searchType === 'movie' ? movieRoute : seriesRoute; // variabile rotta dinamica

        // funzione fetch con valori personalizzati
        fetch(`${url}/${route}?api_key=${key}&query=${query}`)
            .then(res => res.json())
            .then(data => { setMovies(data.results) })
            .catch(err => {
                console.log(err);
            })
    }, [query])

    // ritorna il provider con cui incapsulare l'app (o i componenti dell'app)
    return (
        <CallResultsContext.Provider value={{ movies, searchType, setQueryInContext, changeSearchType, query }}>
            {children}
        </CallResultsContext.Provider>
    )
}

export default CallResultsContext;