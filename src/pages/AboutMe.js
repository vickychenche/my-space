import pfp from "../images/Vicky.png";
export default function AboutMe(){
    return (
    <>
    <h1>About Me</h1>
        <img class="pfp" src={pfp} layout="responsive"/>
        <body> 
            Hello, I am Vicky! <br></br>
            3rd Year Computer Science Specialist + Biology Minor
        </body>
    </>
        
    );
}