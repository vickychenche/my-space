import './Extracurricular.css';
import React, {useState} from 'react';
import Typewriter from '../components/Typewriter';
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
            </div>
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
