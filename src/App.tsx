import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";

import "./styles/App.css";

function App() {
const [page, setPage] = useState("Home")

let Component = Home;
if (page === "Home") {
  Component = Home;
}

  return (
    <div>
      <Header/>
      <Component/>
      <Footer/>
    </div>
  );
} 

export default App;
