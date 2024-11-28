import { useState, useContext } from "react";

// context
import CallResultsContext from "../contexts/CallResultsContext.jsx";

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const { setQueryInContext, changeSearchType } = useContext(CallResultsContext); // variabile context, RICORDA: aggiungi anche la funzione per cambiare il tipo di ricerca
    const [searchType, setSearchType] = useState('movie'); // variabile scelta rotta

    // funzione onChange query
    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    }

    // funxione onChange select
    const handleTypeChange = (e) => {
        setSearchType(e.target.value);
        changeSearchType(e.target.value);
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
                <select
                    id="searchType"
                    value={searchType}
                    onChange={handleTypeChange}>
                    <option value="movie">
                        Film
                    </option>
                    <option value="tv">
                        Serie TV
                    </option>
                </select>
                <button type="submit">
                    Cerca
                </button>
            </form>
        </>
    )
}