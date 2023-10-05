import './ProfExperience.css';
import background from "../images/Background.jpg";
import React,{useState} from 'react';
import Typewriter from '../components/Typewriter';
export default function ProfExperience(){

    const [firstTypewriterComplete, setFirstTypewriterComplete] = useState(false);

    const handleFirstTypewriterComplete = () => {
        setFirstTypewriterComplete(true);
    };
    return(
        <>
        
        <div class="div1">C:\User\Unknown>

        <Typewriter text=' Professional Experiences...' delay={100} onComplete={handleFirstTypewriterComplete}/>
        {firstTypewriterComplete && 
            
        <p>-----------------------------<br/>

        <div class="company"> 
            <div class="company-title">Thomson Reuters (Software Engineer Intern)</div>
            <div class="dates">June 2023 - Current</div><br/>
            <ul class="job-description">
                <li>- Cooperated with developers to design & develop workflows within ONESOURCE Platform to solve unique problems</li>
                <li>- Utilized Microsoft Azure for user story backlog management and project planning</li>
                <li>- Executed end-to-end tasks in TypeScript and Angular for front-end and back-end development</li>
            </ul></div>
        <div class="company"> 
            <div class="company-title">3rdi Laboratory Inc. (General Internship)</div>
			<div class="dates">May 2022 - June 2022</div><br/>
            <ul class="job-description">
                <li>- Researched and constructed logistical data entries on Microsoft Excel for 100+ global museums to examine potential partnership</li>
                <li>- Simplified website formation through Wordpress to accelerate site efficiency</li>
            </ul>
        </div>
        <div class="company"> 
            <div class="company-title">Code/Art Internship (Lead Instructor)</div>
			<div class="dates"> Sept 2021 - April 2022</div><br/>
            <ul class="job-description">
                <li>- Encouraged students to learn python and javascript with lessons and projects that aligns with their interest</li>
                <li>- Facilitated engaging remote classrooms atmosphere through Zoom with ice breakers and exciting games</li>
            </ul>
        </div>
       
       <div class="company">
            <div class="company-title">Royal Canadian Navy</div>
            <div class="dates">Jan 2019 - Nov 2020</div><br/>
            <ul class="job-description">
                <li>- Displayed organizational skill through storage, training, maintenance and use of small arms, demolition and ammunition</li>
                <li>- Persevered and completed task in a timely manner under intense pressure</li>
                <li>- Showcased inclusivity among our community through marching in multiple parades for Remembrance Day and Pride Parade</li>
                <li>- Trained in sail safety, sail navigation, and team cooperation</li>
            </ul>
       </div>
        
        </p>}
        </div></>
    )
}
