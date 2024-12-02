import { createContext, useState, useEffect } from "react";

// crea context
const CallPopularsContext = createContext();

// componente provider
export const CallPopularsProvider = ({ children }) => {
    const [populars, setPopulars] = useState([]); // variabile fetch
    const popularUrl = import.meta.env.VITE_POPULAR_URL;
    const key = import.meta.env.VITE_API_KEY;

    useEffect(() => {

        // funzione fetch
        fetch(`${popularUrl}?api_key=${key}`)
            .then(res => res.json())
            .then(data => {
                setPopulars(data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // ritorno provider
    return (
        <CallPopularsContext.Provider value={{ populars }}>
            {children}
        </CallPopularsContext.Provider>
    )
}

export default CallPopularsContext;