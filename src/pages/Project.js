import './Project.css';
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
         <Typewriter text=' Projects...' delay={100} onComplete={handleFirstTypewriterComplete}/>
        {firstTypewriterComplete && 
            
        <p>-----------------------------<br/>
        <div class="project">
            <div class="project-title">InDevConnect (Summer 2022)</div>
            <div class="project-description">
                This was one of my favorite projects to work on! My team and I created an end product prototype using Figma.
                We identified a problem space aimed at helping indie game developers gain more exposure and conducted research to find a solution. We gathered data through surveys, interviews, and observations to understand how best to approach the problem.
                After determining our approach, we began by creating our initial low-fidelity hand-drawn prototype. Following workshops with potential users, we refined our design and developed a high-fidelity Figma prototype.
            </div>
            <ul class="project-links">
                <li>- <a href="https://docs.google.com/presentation/d/1MrHE1-BRRySlTNYtws_4Yr0XQqnyWqZYgeAFnR51g2s/edit?usp=sharing" target="blank"> Project Presentaion </a></li>
                <li>- <a href="https://docs.google.com/document/d/1k90OKn3s_OlTwvWD225pYDVBqGTDHLefGlnqDTygrDE/edit?usp=sharing" target="blank"> Low Fadelity Protoype </a></li>
                <li>- <a href="https://docs.google.com/presentation/d/1ud0ACtJNoUhchyuC4JFmpnezk1AcgtI_TjymBYX1BD8/edit?usp=sharing" target="black"> Usability Test Report </a></li>
                <li>- <a href="https://www.figma.com/proto/mdfRRY1zSdXdm4GYLX71LD/HiFi-prototype?page-id=421%3A15029&node-id=421%3A15326&viewport=214%2C293%2C0.09&scaling=scale-down&starting-point-node-id=421%3A15326&show-proto-sidebar=1" target="blank"> Final Figma Prototype </a></li>
            </ul>
        </div>
        <div class="project"> 
            <div class="project-title"> MyShell (Winter 2021)</div>
            <div class="project-description">
            This was a project I worked on during my CSC209 (Software Tools and Systems Programming) class. I created a custom terminal using C in a Linux environment, where I also 
            utilized bash and gcc. This project involved implementing fundamental 
            commands such as 'echo,' 'cat,' and 'var.' Additionally, I worked 
            extensively with interprocess functions, including 'fork,' 'pipes,' 
            'signal,' and 'sleep.' Throughout this project, I had the valuable 
            opportunity to learn and enhance my coding skills in C, and gained 
            hands-on experience in these essential areas of system-level programming.
            </div>
        </div>
        <div class="project"> 
            <div class="project-title"> Three Musketeer (Fall 2021)</div>
            <div class="project-description">
            This was a project I worked on with three other classmates during my CSC207 (Software Design) class.
            We created a chess-like game that allowed for two types of gameplay: user-user and user-computer.
            The project was implemented in Java, following an agile development cycle, and we extensively used Git for version control.
            We applied at least six different Object-Oriented Design (OOD) patterns, including MVC, Strategy, Builder, Iterator, Composite, and Singleton, throughout the project.
            </div>
        </div>


        </p>}</div>
        </>

    )
}
