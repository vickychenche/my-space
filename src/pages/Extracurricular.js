import './Extracurricular.css';
import React, {useState} from 'react';
import Typewriter from '../components/Typewriter';
import hockey from '../images/hockey.png';
export default function Project(){
    const [firstTypewriterComplete, setFirstTypewriterComplete] = useState(false);

    const handleFirstTypewriterComplete = () => {
        setFirstTypewriterComplete(true);
    };
    return(
        <>
        <div class="div1">C:\User\Unknown>
         <Typewriter text='cat Extracurricular...' delay={100} onComplete={handleFirstTypewriterComplete}/>
        {firstTypewriterComplete && 
            
        <p>-----------------------------<br/>
        <div class="project">
            <div class="project-title">UTM Tri-Campus Women's Ice Hockey</div>
            <div class="dates">Winter 2021 - Current</div><br/>
            <ul class="job-description"> <li>I play in intermual league at University of Toronto representing the Mississauaga Campus. I love playing ice hockey,
                it has taught me many lessons and made me feel belonged. We play and pactice weekly and occasionally participate in tounrnaments. 
                What I love most about hockey is the team atosphere, both on and off the ice. Success in hockey isn't just about individual skill—it's about the 
                bonds, trust, and cooperation among all the players. I belive this lesson extends well beyond the ice. </li>
            </ul>
            <img
                src={hockey}
                className="hockey"
            />
        </div>
        <div class="project">
            <div class="project-title">Harmonix Music Club (Vice-President of Event)</div>
            <div class="dates">Summer 2022 - May 2023</div><br/>
            <ul class="job-description">
                <li>- Orchestrated a talent show that brought over 100 attendees and generated over 800 dollars in revenue for donations</li>
                <li>- Created an environment for music lovers to practice and interact with each other</li>
                <li>- Responsible for event organization from beginning to end including venues, auditions, lighting, budgeting, and more</li>
    
            </ul>
        </div>

        <div class="project">
            <div class="project-title">Taiwanese (R.O.C) Student Association at University of Toronto (Secretary)</div>
            <div class="dates">April 2022 - May 2023
            </div><br/>
            <ul class="job-description">
                <li>- Maintained club relationship with student union and university throuhg emails, bookings, paperwork</li>
                <li>- Responsibled for all aspects of meetings, membership management, event organization, and monitoring procedues</li>
                <li>- Created a welcoming and safe environment for new taiwanese university students and helped them transition smoothly</li>
    
            </ul>
        </div>
        
        </p>}</div>
        </>

    )
}
