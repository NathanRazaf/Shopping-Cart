import '../styles/HomePage.css';
import Icon from "@mdi/react";
import { mdiMusicCircle } from '@mdi/js';
import Home from "./Home.jsx";
import { Link, Outlet } from "react-router-dom";
const MainPage = () => {
    return (
        <div className="main-page">
            <header>
                <h1>Welcome to <span id='shop-name'>Music Haven</span> !</h1>
            </header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/store">Shopping</Link>
                <Link to="/about">About Us</Link>
            </nav>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Icon
                    path={mdiMusicCircle}
                    size={1}
                    spin
                    color="purple"
                />
                <p>Created by <a href='https://github.com/NathanRazaf'>Nathan Razafindrakoto</a> - <a href='https://github.com/NathanRazaf/Shopping-Cart'>Source</a></p>
                <Icon
                    path={mdiMusicCircle}
                    size={1}
                    spin
                    color="purple"
                />
            </footer>
        </div>
);
};

export default MainPage;