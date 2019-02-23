import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withState from '../../hoc/withState';

const branch = (p, a, b) => p ? a : b;

function ProjectCard({ name, description, imgUrl }) {

    const [showImage, setShowImage] = useState(true);

    return (
        <div className="ProjectCard" onClick={() => setShowImage(!showImage)}>
            {branch(
                showImage, 
                <ProjectCardImg 
                    imgUrl={imgUrl}
                />, 
                <ProjectCardText 
                    name={name}
                    description={description}
                />)}
        </div>
    )
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string
}

function ProjectCardImg({imgUrl}) {
    return (
        <div className="ProjectCardImg">
            <img src={imgUrl} alt="cat" />
        </div>
    )
}

function ProjectCardText({name, description}) {
    return (
        <div className="ProjectCardText">
            <div>{name}</div>
            <div>{description}</div>
        </div>
    )
}


export default ProjectCard;