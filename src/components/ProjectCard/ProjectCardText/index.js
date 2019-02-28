import React from 'react';
import './styles.css';

function ProjectCardText({ name, description }) {
    return (
        <div className="ProjectCardText">
            <div className="title">{name}</div>
            <div className="description">{description}</div>
        </div>
    )
}

export default ProjectCardText;