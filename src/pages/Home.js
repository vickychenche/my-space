import './Home.css';
import pfp from "../images/Vicky.png";
import background from "../images/Background.jpg";
export default function Home(){

    return( 
        <>
        <img src = {background} class="background" layout="responsive" />
        <img class="pfp" src={pfp} layout="responsive"/>
        <body> 
            Hello, I am Vicky! <br></br>
            3rd Year Computer Science Specialist + Biology Minor
        </body>
        </>
        
    );
}