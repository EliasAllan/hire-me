import React from "react";
import ProjectCard from "../components/ProjectCard";
import petAdoptionSc from "../assets/pet-adoption.png";
import drinkFindifierSc from "../assets/drinkrenderscreen.png";
import futureblogSc from "../assets/homepage.png";
import { Link } from "react-router-dom";
function Projects() {
  const projects = [
    {
      title: "Pet Adoption",
      link: "https://pet-adoption-store.herokuapp.com/",
      img: (
        <Link to="https://pet-adoption-store.herokuapp.com/" href="true">
          <img
          
            className="project-screenshot"
            src={petAdoptionSc}
            alt="pet-adoption-screenshot"
            width="100%"
          
          />
        </Link>
      ),
    },
    {
      title: "Drink Findifier",
      link: "https://chocochip287.github.io/cocktail-recipes/",
      img: (
        <Link to="https://chocochip287.github.io/cocktail-recipes/" href="true">
          <img
            className="project-screenshot"
            src={drinkFindifierSc}
            alt="pet-adoption-screenshot"
            width="100%"
          />
        </Link>
      ),
    },
    {
      title: "The Future Blog",
      link: "https://the-future-blog.herokuapp.com/",
      img: (
        <Link to="https://the-future-blog.herokuapp.com/" href="true">
          <img
            className="project-screenshot"
            src={futureblogSc}
            alt="future-blog-screenshot"
            width="100%"
          />
        </Link>
      ),
      
    },

  ];
  return (
    <div className="container">
      {projects.map((project,index) => (
        <ProjectCard key={index} props={project} />
      ))}
    </div>
  );
}

export default Projects;
