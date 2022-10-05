//import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom";
import ProfExperience from './pages/ProfExperience';
import Project from './pages/Project';

function App() {
  
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<AboutMe />} />
          <Route path = "/profExperience" element={<ProfExperience/>} />
          <Route path = "/project" element={<Project/>} />
        </Routes>
      </div>
      
    </>
  )
  
  
}

export default App;
