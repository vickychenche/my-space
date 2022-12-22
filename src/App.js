//import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom";
import ProfExperience from './pages/ProfExperience';
import Project from './pages/Project';
//import $ from 'jquery';

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
/*
function getMouseCoords(e) {
  var e = e || window.event;
  document.getElementById('container').innerHTML = e.clientX + ', ' +
    e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
}

var followCursor = (function() {
  var s = document.createElement('div');
  s.style.position = 'absolute';
  s.style.margin = '0';
  s.style.padding = '5px';
  s.textContent = "🚀"

  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left = (e.clientX - 5) + 'px';
      s.style.top = (e.clientY - 5) + 'px';
      getMouseCoords(e);
    }
  };
}());

window.onload = function() {
  followCursor.init();
  document.body.onmousemove = followCursor.run;
}*/


export default App;
