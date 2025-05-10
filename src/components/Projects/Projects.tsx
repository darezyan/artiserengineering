import React from "react";
import styles from "./Projects.module.css";
import { assets } from "../../assets/Assets";

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Aluminum Window Installation - Warri",
    description: "Design, fabrication, and installation of aluminum windows for Technical College, Warri.",
    image: assets.proj1,
  },
  {
    title: "Aluminum Window Installation - Benin",
    description: "Design, fabrication, and installation of aluminum windows for School of Agriculture, Benin",
    image: assets.proj2,
  },
  {
    title: "Aluminum Window Installation - Warri",
    description: "Design, fabrication, and installation of aluminum windows for an Event Center, Warri",
    image: assets.ev,
  },
  {
    title: "Aluminum Window & Railings Installation - Warri",
    description: "Design, fabrication, and installation of aluminum windows & Railings for Army Secondary School, Warri.",
    image: assets.proj3,
  },
  {
    title: "Civil Maintenance - Delta State Library",
    description: "Routine maintenance and repair works in Delta State Library.",
    image: assets.lib,
  },
  {
    title: "Aluminum Window Installation - Asaba",
    description: "Design, fabrication, and installation of aluminum windows & Railings for Delta State House of Assembly",
    image: assets.hoa,
  },
  {
    title: "Aluminum Window & Railings Installation - Asaba",
    description: "Design, fabrication, and installation of aluminum windows & Railings for a Hotel",
    image: assets.event,
  },
  {
    title: "Aluminum Window & Railings Installation - Asaba",
    description: "Design, fabrication, and installation of aluminum windows & Railings for a School",
    image: assets.rail,
  },

];

const Projects: React.FC = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.heading}>Our Projects</h2>
      <p className={styles.subheading}>A showcase of our recent works across civil, mechanical, and electrical sectors.</p>
      <div className={styles.projectGrid}>
        {projects.map((project, idx) => (
          <div className={styles.card} key={idx}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
