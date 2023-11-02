import './Home.css';
import Typewriter from '../components/Typewriter';
import React,{useState} from 'react';
import background from "../images/Background.jpg";
export default function Home(){

    const [firstTypewriterComplete, setFirstTypewriterComplete] = useState(false);
    const [secondTypewriterComplete, setSecondTypewriterComete] = useState(false);

    const handleFirstTypewriterComplete = () => {
        setFirstTypewriterComplete(true);
    };

    const handleSecondTypewriteComplete = () => {
        setSecondTypewriterComete(true);
    }
    
    return( 
        <>
        <img src = {background} class="background"  />
        <div class="content">
            <Typewriter text='Lil Glucose [Version 1.0.0.0]' delay={20} onComplete={handleFirstTypewriterComplete}
                    />
            <br></br>
            {firstTypewriterComplete && (
                <Typewriter text='(c) Not a Corporation. All rights reserved' delay={20} onComplete={handleSecondTypewriteComplete}/>
            )}
            <br></br>
            
            {secondTypewriterComplete && <p> -----------------------------  <br />
            
            C:\User\Unknown>
            <a class="home-link" href="https://docs.google.com/document/d/1uwW8BBKvrYGxFONNgMdp2QYD17U9tGmS9aRagDV42TA/edit?usp=sharing" target="blank"> RESUME </a> 
            <br />
            C:\User\Unknown>
            <a class="home-link" href="https://www.linkedin.com/in/vicky-chen-chen/" target="blank"> LINKEDIN </a>
            <br/>
            C:\User\Unknown> 
            <a class="home-link" href="https://www.youtube.com/channel/UC8ckrW8bjzIZG1EdG4THFbQ" target="blank"> YOUTUBE</a>
            <br/>
            C:\User\Unknown> <a class="home-link">I like soup and play hockey</a>
            </p>}
           
        </div>
        
        
        </>
        
    );

}



