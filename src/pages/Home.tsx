import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import ContactSection from "../components/contact/ContactSection";
import BlogSection from "../components/blog/BlogSection";
import ProjectsSection from "../components/projects/ProjectsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection/>
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;
