import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

import Contact from "./pages/Contact";

const Home = lazy(() => import("./pages/Home"));
const Articles = lazy(() => import("./pages/Article"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/articles/:id" element={<Articles />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
