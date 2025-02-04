import './Project.css';
import React, {useState} from 'react';
import Typewriter from '../components/Typewriter';
import report from "../images/indevconnect.png";
import prototype from "../images/figma_prototype.png"
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
            <div class="project-title">Crafting Interpreter (Ongoing)</div>
            <div class="project-description">
                I love this book. For its detailed approad to explaining the basics of language construction and the story telling. 
                It led me through the intricate process of designing and implementing a bytecode virtual machine (VM) from scratch, 
                emphasizing low-level memory management and runtime optimization. Through developing a recursive descent parser and an 
                abstract syntax tree (AST) to compile high-level Lox code into bytecode, I was able to build essential components such as 
                garbage collection, object representation, and bytecode compilation myself. This hands-on experience with stack-based execution, 
                bytecode generation, and memory safety was invaluable as I implemented the VM.evel Lox code into bytecode, as well as b
                uilding core components like garbage collection, object representation, and bytecode compilation. By engaging with this 
                book, I gained hands-on experience in stack-based execution, bytecode generation, and ensuring memory safety while implementing the VM.
            </div>
            <div class="project-title">InDevConnect (Summer 2022)</div>
            <div class="project-description">
            "Come check out this exciting project where my team and I developed an end-product prototype using Figma, 
            aimed at increasing exposure for indie game developers. Our process began with extensive research, 
            including surveys, interviews, and observations, to deeply understand the problem space. 
            After analyzing the data, we crafted an initial low-fidelity hand-drawn prototype. 
            Through iterative user workshops, we refined our ideas and brought the concept to life, 
            culminating in a high-fidelity prototype designed in Figma.
What I enjoyed about this:
What I loved most about this project was witnessing our vision transform into a tangible, functional prototype. 
Seeing my ideas come to life in a way users could interact with was incredibly rewarding."</div>
            <div className="project-links-container">
                                <a
                                    href="https://docs.google.com/presentation/d/e/2PACX-1vQLaKaXMyZXjmPkoTkzKWif9loR3ZfVGm__W-ARQVK3L8zV3LOa0GErL1BYY0nwTGQpxggpd740qMIt/pub?start=false&loop=false&delayms=3000&slide=id.p"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <img
                                        src={report}
                                        alt="Usability Test Report"
                                        className="report"
                                    />
                                    <span>Usability Test Report</span>
                                </a>
                                <a
                                    href="https://www.figma.com/proto/QLY8Ob81vpzqUKkajt7XYL/HiFi-prototype-Demo?node-id=217-14663&node-type=canvas&t=Tl2YmNIUnY5VmIDq-1&scaling=scale-down&content-scaling=fixed&page-id=217%3A10397&starting-point-node-id=217%3A14663&show-proto-sidebar=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <img
                                        src={prototype}
                                        alt="Final Figma Prototype"
                                        className="figma_prototype"
                                    />
                                    <span>Final Figma Prototype</span>
                                </a>
                            </div>
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
