// qui sarà il DefaulLayout
import { Outlet } from "react-router-dom";

// componenti
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function DefaulLayout() {
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}