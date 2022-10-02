//import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom";

function App() {
  
  return(
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<AboutMe />} />
        </Routes>
      </div>
      
    </>
  )
  
  
}

export default App;
