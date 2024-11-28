export default function SearchBar() {
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