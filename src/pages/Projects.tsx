import { SetStateAction, useState, useEffect } from "react";

import "../styles/Projects.css";
const Projects = () => {
  const [activeTab, setActiveTab] = useState("AllProjects"); // Initialize the active tab

  useEffect(() => {
    counter();
  });

  const handleTabClick = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName); // Set the active tab when a button is clicked
  };

  const defaultTab = () => {
    projectTabs("AllProjects");
  };

  defaultTab();

  const counter = () => {
    projectTabs(activeTab);
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

          {/* Tab content */}
          {/* You can map over the project data to generate project elements */}
          <div id="AllProjects" className="tabcontent">
            <div className="my-project">
              <div className="my-project-img">
                <img src="" alt="" />
              </div>
              <div className="my-project-details">
                <div className="my-project-name">
                  <h1>Hello world</h1>
                </div>
                <div className="my-project-detail">
                  <h1 className="my-project-subt">Detail</h1>
                  <p>Hello world project</p>
                </div>
                <div className="my-project-status">
                  <h1 className="my-project-subt">Status</h1>
                  <p>Development</p>
                </div>
                <div className="my-project-go">
                  <div className="my-go-button">
                    <h1>VIEW PROJECT</h1>
                    <a href="/">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the same structure for "Complete" and "Development" tabs */}
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
