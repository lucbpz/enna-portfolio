import React from 'react';
import ProjectCard from '../../../components/ProjectCard';
import './styles.css';
import { Link } from 'react-router-dom';
const parse = (mdStr) => {
    const lines = mdStr.split('\n');
    // eslint-disable-next-line no-unused-vars
    const [empty, props, ...body] = mdStr.split('---\n');
    return { 
        ...parseProp(lines[1]), 
        ...parseProp(lines[2]), 
        ...parseProp(lines[3]),
        ...parseProp(lines[4]),
        ...parseProp(lines[5]),
        body: body.join('---\n')
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
                return (
                    <Link to={{pathname: `/projects/${parsed.name}`, state: parsed}}>
                        <ProjectCard
                            key={parsed.name}
                            imgUrl={parsed.thumbnail}
                            name={parsed.name}
                            description={parsed.description}
                        />
                    </Link>
            )}
            )}
        </div>
    )
}

export default Projects;