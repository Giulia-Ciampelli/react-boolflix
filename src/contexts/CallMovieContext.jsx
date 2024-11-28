// qui andrà la chiamata ajax, stessa cosa fatta ieri notte?

// importa createcontext, usestate e useeffect
import { createContext, useState, useEffect } from "react";

// crea un context
const CallMovieContext = createContext();

// crea ed esporta il componente provider
export const CallMovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]); // variabile fetch
    const [query, setQuery] = useState(''); // variabile query
    const url = import.meta.env.VITE_BASE_URL;

    // funzione per query
    const setQueryInContext = (newQuery) => {
        setQuery(newQuery); // aggiornamento stato query
    }

    // crea funzione fetch (RICORDA: separa il link in baseUrl e APIKey e forse anche query? al momento metto un link con query per testare la chiamata)
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

    // modifica per rendere le query dinamiche

    // ritorna il provider con cui incapsulare l'app (o i componenti dell'app)
    return (
        <CallMovieContext.Provider value={{ movies, setQueryInContext }}>
            {children}
        </CallMovieContext.Provider>
    )
}

export default CallMovieContext;