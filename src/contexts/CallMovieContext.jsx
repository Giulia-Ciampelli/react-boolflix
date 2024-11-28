// qui andrà la chiamata ajax, stessa cosa fatta ieri notte?

// importa createcontext, usestate e useeffect
import { createContext, useState, useEffect } from "react";

// crea un context
const CallMovieContext = createContext();

// crea ed esporta il componente provider
export const CallMovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]); // variabile fetch
    const url = import.meta.env.VITE_URL;

    // crea funzione fetch (RICORDA: separa il link in baseUrl e APIKey e forse anche query? al momento metto un link con query per testare la chiamata)
    useEffect(() => {
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => { setMovies(data.results) })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // ritorna il provider con cui incapsulare l'app (o i componenti dell'app)
    return (
        <CallMovieContext.Provider value={{ movies }}>
            {children}
        </CallMovieContext.Provider>
    )
}

export default CallMovieContext;