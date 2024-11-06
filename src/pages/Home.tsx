import { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import ContactSection from "../components/contact/ContactSection";
import BlogSection from "../components/blog/BlogSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import { getHomeData } from "../services/endpoints";

const Home = () => {
  const [isloading, setisloading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    if (isloading) {
      fetchData();
    }
  }, [isloading]);

  const fetchData = async () => {
    try {
      const res = await getHomeData();
      console.log(res);
      const { projects, articles } = res.data;
      setProjects(projects);
      setArticlesData(articles);
      setisloading(false);
    } catch (err) {
      console.log(err);
    }
  };
    
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection projects={projects} />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;
