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
         <Typewriter text='cat Projects...' delay={100} onComplete={handleFirstTypewriterComplete}/>
        {firstTypewriterComplete && 
            
        <p>-----------------------------<br/>
        <div class="project">
            <div class="project-title">InDevConnect (Summer 2022)</div>
            <div class="project-description">
            I worked on a project where my team and I developed an end-product prototype using Figma, aimed at 
            increasing exposure for indie game developers. We conducted thorough research, including surveys, 
            interviews, and observations, to identify and understand the problem space. After analyzing the data, 
            we created an initial low-fidelity hand-drawn prototype. Through user workshops, we iteratively refined 
            our design, ultimately developing a high-fidelity prototype in Figma.</div>
            <ul class="project-links">
                <li>- <a href="https://docs.google.com/presentation/d/1ud0ACtJNoUhchyuC4JFmpnezk1AcgtI_TjymBYX1BD8/edit?usp=sharing" target="black"> Usability Test Report </a></li>
                <li>- <a href="https://www.figma.com/proto/mdfRRY1zSdXdm4GYLX71LD/HiFi-prototype?page-id=421%3A15029&node-id=421%3A15326&viewport=214%2C293%2C0.09&scaling=scale-down&starting-point-node-id=421%3A15326&show-proto-sidebar=1" target="blank"> Final Figma Prototype </a></li>
            </ul>
        </div>
        <div class="project"> 
            <div class="project-title"> MyShell (Winter 2021)</div>
            <div class="project-description">
            During my CSC209 (Software Tools and Systems Programming) course, 
            I developed a custom terminal using C in a Linux environment, leveraging bash and gcc. 
            This project involved implementing core commands such as 'echo,' 'cat,' and 'var,' 
            and working extensively with interprocess communication functions like 'fork,' 'pipes,' 'signal,' 
            and 'sleep.' Through this project, I gained practical experience in system-level programming and 
            strengthened my proficiency in C.   </div>
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
