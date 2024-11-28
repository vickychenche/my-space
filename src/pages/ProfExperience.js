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

        <Typewriter text='cat Work Experiences...' delay={100} onComplete={handleFirstTypewriterComplete}/>
        {firstTypewriterComplete && 
            
        <p>-----------------------------<br/>

        <div class="company"> 
            <div class="company-title">Thomson Reuters (Software Engineer Intern)</div>
            <div class="dates">June 2023 - May 2024</div><br/>
            <ul class="job-description">
                <li>- Collaborated on large-scale infrastructure projects, developing and optimizing workflow in the ONESOURCE Platform</li>
                <li>- Designed and implemented Python scripts leveraging AWS DynamoDB and Apigee, streamlining data update processes and enhancing system efficiency for seamless integration and data management</li>
                <li>- Utilized Microsoft Azure for backlog management and project planning within the SCRUM Framework</li>
                <li>- Executed end-to-end tasks using TypeScript and Angular across front-end and back-end</li>
            </ul></div>
        <div class="company"> 
            <div class="company-title">3rdi Laboratory Inc. (General Internship)</div>
			<div class="dates">May 2022 - June 2022</div><br/>
            <ul class="job-description">
                <li>- Researched and compiled logistical data entries on Microsoft Excel for over 100 global museums, driving initiatives for
data-driven partnerships and improved data analysis processes</li>
                <li>- Enhanced website performance through WordPress contributing to continuous delivery and infrastructure monitoring</li>
            </ul>
        </div>
        <div class="company"> 
            <div class="company-title">Code/Art Internship (Lead Instructor)</div>
			<div class="dates"> Sept 2021 - April 2022</div><br/>
            <ul class="job-description">
                <li>- Led hands-on coding projects in Python and JavaScript for a group of around 10 girls, developing learning materials and delivering interactive lessons that encouraged technical skills and collaboration</li>
                <li>- Designed and managed virtual classrooms, using custom slides, coding challenges, and icebreakers to maintain high engagement
and create an inclusive, positive learning environment</li>
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
