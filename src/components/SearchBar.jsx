import { useState, useContext } from "react";

// context
import CallResultsContext from "../contexts/CallResultsContext.jsx";

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const {setQueryInContext} = useContext(CallResultsContext); // variabile context

    // funzione onChange
    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    }

    // funzione form
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setQueryInContext(query); // aggiornamento query del context
    }

    return (
        <>
            <form onSubmit={handleSearchSubmit}>
                <input type="search"
                    name="search"
                    id="search"
                    placeholder="Scrivi il titolo di un film..."
                    value={query}
                    onChange={handleSearchChange} />
                <button type="submit">
                    Cerca
                </button>
            </form>
        </>
    )
}