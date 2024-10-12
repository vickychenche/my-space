import './Home.css';
import Typewriter from '../components/Typewriter';
import React, { useState } from 'react';
import background from "../images/Background.jpg";

export default function Home() {
    const [firstTypewriterComplete, setFirstTypewriterComplete] = useState(false);
    const [secondTypewriterComplete, setSecondTypewriterComplete] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const handleFirstTypewriterComplete = () => {
        setFirstTypewriterComplete(true);
    };

    const handleSecondTypewriterComplete = () => {
        setSecondTypewriterComplete(true);
    };

    const handleClosePanel = () => {
        setIsPanelOpen(false);  // Close the panel
    };

    const handleWordClick = () => {
        setIsPanelOpen(!isPanelOpen);  // Toggle the panel's open/close state
    };

    return (
        <>
            <img src={background} className="background" alt="Background" />
            <div className="content">
                <Typewriter text='Lil Glucose [Version 1.0.0.0]' delay={50} onComplete={handleFirstTypewriterComplete} />
                <br />
                {firstTypewriterComplete && (
                    <Typewriter text='C:\User\Unknown> cat Basic Information...' delay={100} onComplete={handleSecondTypewriterComplete} />
                )}
                <br />

                {secondTypewriterComplete && (
                    <p>
                        -----------------------------  <br />
                        --> <a className="home-link" href="https://drive.google.com/file/d/1c7i_unmmiFCdCfYR6fjuMjifPOtVv7S_/view?usp=sharing"target="_blank">RESUME</a><br />  
                        --> <a className="home-link" href="https://www.linkedin.com/in/vicky-chen-chen/" target="_blank" rel="noopener noreferrer">LINKEDIN</a><br />
                        --> <a className="home-link" href="https://www.youtube.com/channel/UC8ckrW8bjzIZG1EdG4THFbQ" target="_blank" rel="noopener noreferrer">YOUTUBE</a><br />
                        --> <a className="home-link" href="https://docs.google.com/spreadsheets/d/15NvRDs-rDFWdM8U6FqO6NqlPk5US4tFuleFzEtPQUyI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">CAFE REVIEW</a><br />
                        <a className="home-link">Thank you for visiting</a>
                    </p>
                )}
            </div>
        </>
    );
}
