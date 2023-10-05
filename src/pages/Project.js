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
        <h2>The following are some of the projects I have worked on throughout the years!</h2>
        <h3 class="title"> InDevConnect (Summer 2022)</h3>
        <body>
        This was one of my favourite project to work on! My team and I create a end product of Protoype using Figma. <br></br>
        We identified a problem space to help indie game devloper to get more exposure and researched a way to fix this problem. <br></br>
        We conducted surveys, interview and observation to identiy how we can approach the solution. <br></br>
        After deciding the direction we will go, we created our first low fadelity handrawn protoype. <br></br>
        After conducting workshop with potential users we finalized a desgined and created high fadelity figma protoype.<br></br>
        </body>
        <body>
        <a href="https://docs.google.com/presentation/d/1MrHE1-BRRySlTNYtws_4Yr0XQqnyWqZYgeAFnR51g2s/edit?usp=sharing" target="blank"> Project Presentaion </a>
        <br></br>
        <a href="https://docs.google.com/document/d/1k90OKn3s_OlTwvWD225pYDVBqGTDHLefGlnqDTygrDE/edit?usp=sharing" target="blank"> Low Fadelity Protoype </a>
        <br></br>
        <a href="https://docs.google.com/presentation/d/1ud0ACtJNoUhchyuC4JFmpnezk1AcgtI_TjymBYX1BD8/edit?usp=sharing" target="black"> Usability Test Report </a>
        <br></br>
        <a href="https://www.figma.com/proto/mdfRRY1zSdXdm4GYLX71LD/HiFi-prototype?page-id=421%3A15029&node-id=421%3A15326&viewport=214%2C293%2C0.09&scaling=scale-down&starting-point-node-id=421%3A15326&show-proto-sidebar=1" target="blank"> Final Figma Prototype </a>
        </body>
        <h3 class="title"> Three Musketeer (Fall 2021)</h3>
        <body>
        This was a project that I made with 3 other classmates when I took CSC207 (software design) class. <br></br>
        We created a chest like game that allowed 2 types of play style, user-user, user-computer. <br></br>
        The project was done in java with agile cycle and used git heavly. <br></br>
        There were a minimun of 6 differnet OOD design ex. MVC, Strategy, Builder, Iterator, composite, singleton, that was used in this project<br></br>
        </body>


        </p>}</div>
        </>

    )
}
