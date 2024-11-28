import { NavLink } from "react-router-dom";

export default function NavBar() {
    return(
        <>
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/films">
                    Films
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
            </nav>
        </>
    )
}