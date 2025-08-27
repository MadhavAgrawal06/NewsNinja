import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar';

export default function App(){

  const apiKey= process.env.REACT_APP_API_KEY;
  const[progress,setProgress]=useState(0);

    return (
      <>
      <Router>
          <Navbar/>
          <LoadingBar height={3} color="#f11946" progress={progress}/>
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} totalProgress={setProgress} key="general" category="general"/>}/>
            <Route exact path="/business" element={<News apiKey={apiKey} totalProgress={setProgress} key="business" category="business" />}/>
            <Route exact path="/entertainment" element={<News apiKey={apiKey} totalProgress={setProgress} key="entertainment" category="entertainment" />}/>
            <Route exact path="/health" element={<News apiKey={apiKey} totalProgress={setProgress} key="health"category="health" />}/>
            <Route exact path="/science" element={<News apiKey={apiKey} totalProgress={setProgress} key="science"category="science" />}/>
            <Route exact path="/sports" element={<News apiKey={apiKey} totalProgress={setProgress} key="sports" category="sports" />}/>
            <Route exact path="/technology" element={<News apiKey={apiKey} totalProgress={setProgress} key="tech" category="technology" />}/>
          </Routes>
      </Router>
      </>
    )
}
