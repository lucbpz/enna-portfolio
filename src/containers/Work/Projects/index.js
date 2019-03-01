import React from 'react';
import ProjectCard from '../../../components/ProjectCard';
import './styles.css';
import MarkdownIt from 'markdown-it';

const parse = (mdStr) => {
    const lines = mdStr.split('\n');
    return { 
        ...parseProp(lines[1]), 
        ...parseProp(lines[2]), 
        ...parseProp(lines[3]),
        ...parseProp(lines[4]),
        ...parseProp(lines[5])
    };
}

const parseProp = (keyValueStr) => {
    const [key, rest] = keyValueStr.split(': ');
    return {[key]: rest};
}
const Projects = ({projects}) => {
    return(
        <div className="Projects">
            {Array.from(Object.values(projects)).map(project => {
                const parsed = parse(project);
                // debugger;
                return (
                <ProjectCard
                    key={parsed.name}
                    imgUrl={parsed.thumbnail}
                    name={parsed.name}
                    description={parsed.description}
                />
            )}
            )}
        </div>
    )
}

export default Projects;