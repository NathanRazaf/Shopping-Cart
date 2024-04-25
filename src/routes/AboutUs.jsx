import Icon from '@mdi/react';
import { mdiPhone,mdiEmailOutline,mdiMapMarker } from '@mdi/js';
import "../styles/AboutUs.css";
import rickRollImg from "../assets/rickroll.png";

function AboutUs() {
    return (
        <div className="AboutUs">
            <h1>About Us</h1>
            <p>MusicHaven satisfies his favourite singers and musicians from all over the world since 1987. Founded by Nathan Razafindrakoto, our infinite growth on the market has been recognized by all the best business websites in the world. We've been classed the number one musical shop in the Universe since 1999, thanks to our fans (and clearly not to spam bots). We're open online 24/7, and we got renowned shops all over the world!</p>
            <h3>Here's how you can contact us (we guarantee a real person will answer and not just an AI) :</h3>
            <div className='contacts'>
                <span className="contact"><Icon path={mdiPhone} size={1} /> (696) 969-4200</span>
                <span className="contact"><Icon path={mdiEmailOutline} size={1}/> mostrandomfakestoreever.lmfao@gmail.com</span>
                <span className="contact"><Icon path={mdiMapMarker} size={1}/> 1234 Rick Roll St.</span>
            </div>
            <img src={rickRollImg} alt="Rick Roll" />

        </div>
    );
}

export default AboutUs;
