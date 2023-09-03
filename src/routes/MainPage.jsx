import '../styles/MainPage.css';
import Icon from "@mdi/react";
import { mdiMusicCircle,mdiCartOutline } from '@mdi/js';
import { Link, Outlet } from "react-router-dom";
const MainPage = () => {
    return (
        <div className="main-page">
            <Link to='/store/cart'>
                <button className='cart-button'>
                    <Icon path={mdiCartOutline} size={1.5} color='white' />
                </button>
            </Link>
            <header>
                <h1>Welcome to <Link to='/'><span id='shop-name'>Music Haven</span></Link> !</h1>
            </header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/store">Shopping</Link>
                <Link to="/about">About Us</Link>
            </nav>
            <Outlet/>
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