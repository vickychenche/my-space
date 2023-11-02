import Navbar from './Navbar';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom";
import ProfExperience from './pages/ProfExperience';
import Project from './pages/Project';
import Extracurricular from './pages/Extracurricular';
import './App.css'
//import $ from 'jquery';

function App() {
  return(
    <>
      <Navbar/>

      <div className='container'>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/profExperience" element={<ProfExperience/>} />
          <Route path = "/project" element={<Project/>} />
          <Route path = "/extracurricular" element={<Extracurricular/>} />"
        </Routes>
      </div>

    </>
  )


}

export default App;
