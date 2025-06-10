/* import React from 'react';
:react 17버전부터는 위에 import를 명시 안해도 됨*/

import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './components/Header.jsx'
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';

function App() {

  return (
   <Router>
    <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Projects" element = {<Projects/>}/>
        <Route path = "/About" element = {<About/>}/>
      </Routes>
   </Router>
  );
}

export default App;
