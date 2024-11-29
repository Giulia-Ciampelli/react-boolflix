// qui sarà l'header
// import NavBar from "./NavBar.jsx";
import SearchBar from "./SearchBar.jsx";

// logo
import HeaderLogo from "../assets/header-logo.png";

export default function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={HeaderLogo} alt="" />
                </div>
                <div className="search">
                    <SearchBar />
                </div>
            </header>
        </>
    )
}