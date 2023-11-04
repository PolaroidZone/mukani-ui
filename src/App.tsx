import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Articles from "./pages/Article";
import Projects from "./pages/Projects";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/article" element={<Articles/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
} 

export default App;
