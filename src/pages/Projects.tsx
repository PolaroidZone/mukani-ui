import { SetStateAction, useState, useEffect } from "react";
import TabProject from "../components/projects/TabProject";
import {
  getDevProjects,
  getComProjects,
  getProjects,
} from "../services/endpoints";

import "../styles/Projects.css";

interface ProjectTy {
  // Define the structure of your project data
  id: string;
  thumbPath: string;
  title: string;
  details: string;
  status: string;
  github: string;
  // Add other properties as needed
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState("AllProjects"); // Initialize the active tab
  const [projects, setProjects] = useState<ProjectTy[]>([]); // Initialize the project data
  const [isLoading, setIsLoading] = useState(true); // Initialize the loading state
  const [devProjects, setDevProjects] = useState<ProjectTy[]>([]); // Initialize the development project data
  const [comProjects, setComProjects] = useState<ProjectTy[]>([]); // Initialize the complete project data

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await getProjects();
      const { projects } = response.data;
      setProjects(projects);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch development projects
  const fetchDevProjects = async () => {
    try {
      setIsLoading(true);
      const response = await getDevProjects();
      const { development } = response.data;
      setDevProjects(development);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch complete projects
  const fetchComProjects = async () => {
    try {
      setIsLoading(true);
      const response = await getComProjects();
      const { complete } = response.data;
      setComProjects(complete);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    projectTabs(activeTab);
    if (isLoading) {
      fetchProjects();
      fetchDevProjects();
      fetchComProjects();
    }
    setIsLoading(false);
  }, [activeTab, isLoading]);
  const handleTabClick = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName); // Set the active tab when a button is clicked
  };

  const activeButtonStyles = {
    border: "none",
    height: "100%",
    borderRadius: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
    cursor: "pointer",
    fontWeight: "bolder",
    backgroundColor: "#ffffff",
    color: "#1f1f1f",
    transition: "0.5s",
  };

  return (
    <section className="container">
      <div className="projects-hero-container">
        <div className="project-heading-container">
          <h1 className="projets-hero-heading">My project</h1>
          <h1>creation</h1>
        </div>
        <div className="project-tabs">
          {/* Tab buttons */}
          {/* Use onClick handlers to handle tab switching */}
          <div className="tabs">
            <div className="tab-buttons">
              <button
                className={`tablinks ${
                  activeTab === "AllProjects" ? "active" : "active"
                }`}
                onClick={() => {
                  handleTabClick("AllProjects");
                  projectTabs("AllProjects");
                }}
                id="defaultOpen"
                style={
                  activeTab === "AllProjects" ? activeButtonStyles : undefined
                }
              >
                All Projects
              </button>
              <button
                className={`tablinks ${
                  activeTab === "Complete" ? "active" : ""
                }`}
                onClick={() => {
                  handleTabClick("Complete");
                  projectTabs("Complete");
                }}
                style={
                  activeTab === "Complete" ? activeButtonStyles : undefined
                }
              >
                Complete
              </button>
              <button
                className={`tablinks ${
                  activeTab === "Development" ? "active" : ""
                }`}
                onClick={() => {
                  handleTabClick("Development");
                  projectTabs("Development");
                }}
                style={
                  activeTab === "Development" ? activeButtonStyles : undefined
                }
              >
                Development
              </button>
            </div>
          </div>
          <div id="AllProjects" className="tabcontent">
            {projects.map((project, index) => (
              <TabProject
                key={index}
                id={project.id}
                thumbPath={project.thumbPath}
                title={project.title}
                details={project.details}
                status={project.status}
                github={project.github}
              />
            ))}
          </div>
          <div id="Development" className="tabcontent">
            {devProjects.map((project, index) => (
              <TabProject
                key={index}
                id={project.id}
                thumbPath={project.thumbPath}
                title={project.title}
                details={project.details}
                status={project.status}
                github={project.github}
              />
            ))}
          </div>
          <div id="Complete" className="tabcontent">
            {comProjects.map((project, index) => (
              <TabProject
                key={index}
                id={project.id}
                thumbPath={project.thumbPath}
                title={project.title}
                details={project.details}
                status={project.status}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

function projectTabs(tabName: string) {
  // Function for handling tab switching
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    (tabcontent[i] as HTMLElement).style.display = "none";
  }

  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.style.display = "grid";
  }

  const event = document.querySelector(
    `[onclick="projectTabs(event, '${tabName}' )"]`
  );
  if (event) {
    event.className += " active";
  }
}
