import React from 'react';
import ProjectCard from '../../../components/ProjectCard';
import './styles.css';
const Projects = () => {

    return(
        <div className="Projects">
            <ProjectCard
                imgUrl="https://cdn.petcarerx.com/LPPE/images/articlethumbs/Cat-Scratch-Fever-Small.jpg"
                name="name"
                description="desc"
            />
            <ProjectCard
                imgUrl="https://cdn.petcarerx.com/LPPE/images/articlethumbs/Cat-Scratch-Fever-Small.jpg"
                name="name"
                description="desc"
            />
        </div>
    )
}

export default Projects;