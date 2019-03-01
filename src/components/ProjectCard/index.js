import React from 'react';
import PropTypes from 'prop-types';
import ProjectCardImg from './ProjectCardImg'
import ProjectCardText from './ProjectCardText'
import './styles.css';

const ProjectCard = ({ name, description, imgUrl }) => {

    return (
        <div className="ProjectCard">
            <ProjectCardImg
                imgUrl={imgUrl}
            />
            <ProjectCardText
                name={name}
                description={description}
            />
        </div>
    )
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string
}

export default ProjectCard;