import './navbar.css';
import fire from ".//images/fireicon.png";
export default function navbar(){
    return <nav className="nav">
        <a href="/" id="home-name"> <img class="icon" src={fire} alt="ICON"/>Vicky Chen</a>
        <ul>
            <li>
                <a href="/profExperience"> Professional Experiences</a>
            </li>
            <li>
                <a href="/project"> Projects</a>
            </li>
        </ul>
    </nav>
}
