import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import News from './components/News.js';

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="general" category="general"/>}/>
            <Route exact path="/world" element={<News key="world" category="world" />}/>
            <Route exact path="/business" element={<News key="business" category="business" />}/>
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />}/>
            <Route exact path="/health" element={<News key="health"category="health" />}/>
            <Route exact path="/science" element={<News key="science"category="science" />}/>
            <Route exact path="/sports" element={<News key="sports" category="sports" />}/>
            <Route exact path="/technology" element={< News key="tech" category="technology" />}/>
          </Routes>
      </Router>
      </>
    )
  }
}
