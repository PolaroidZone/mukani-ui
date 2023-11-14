import { useEffect, useState } from "react";

import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import ContactSection from "../components/contact/ContactSection";
import BlogSection from "../components/blog/BlogSection";
import ProjectsSection from "../components/projects/ProjectsSection";

import { getHomeData } from "../services/endpoints";

const Home = () => {
  const [isloading, setisloading] = useState("true");

  useEffect(() => {
    getHomeData()
      .then((res) => {
        console.log(res);
        setisloading("false");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;
