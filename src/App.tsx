import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Articles from "./pages/Article";
import Projects from "./pages/Projects";

import "./styles/App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/articles" element={<Articles/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
} 

export default App;
