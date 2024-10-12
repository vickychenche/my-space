import './Home.css';
import Typewriter from '../components/Typewriter';
import React,{useState} from 'react';
import background from "../images/Background.jpg";
import resume from "../images/resume.pdf";
export default function Home(){

    const [firstTypewriterComplete, setFirstTypewriterComplete] = useState(false);
    const [secondTypewriterComplete, setSecondTypewriterComete] = useState(false);

    const handleFirstTypewriterComplete = () => {
        setFirstTypewriterComplete(true);
    };

    const handleSecondTypewriteComplete = () => {
        setSecondTypewriterComete(true);
    }

    const openResume = () => {
        window.open(resume);
      };
    
    return( 
        <>
        <img src = {background} class="background"  />
        <div class="content">
            <Typewriter text='Lil Glucose [Version 1.0.0.0]' delay={50} onComplete={handleFirstTypewriterComplete}
                    />
            <br></br>
            {firstTypewriterComplete && (
                <Typewriter text='C:\User\Unknown> cat Basic Information...' delay={100} onComplete={handleSecondTypewriteComplete}/>
            )}
            <br></br>
            
            {secondTypewriterComplete && <p> -----------------------------  <br />
            
            --> <a className="home-link" href={resume} target="blank"> RESUME</a>
            <br />
            --><a class="home-link" href="https://www.linkedin.com/in/vicky-chen-chen/" target="blank"> LINKEDIN </a>
            <br/>
            --><a class="home-link" href="https://www.youtube.com/channel/UC8ckrW8bjzIZG1EdG4THFbQ" target="blank"> YOUTUBE</a>
            <br/>
            --><a class="home-link" href="https://docs.google.com/spreadsheets/d/15NvRDs-rDFWdM8U6FqO6NqlPk5US4tFuleFzEtPQUyI/edit?usp=sharing" target="blank"> CAFE REVIEW</a>
            <br/>
            <a class="home-link"> Thank you for visiting</a>
            </p>}
           
        </div>
        
        
        </>
        
    );

}



