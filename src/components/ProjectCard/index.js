import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import withState from '../../hoc/withState';
import ProjectCardImg from './ProjectCardImg'
import ProjectCardText from './ProjectCardText'
// import branch from '../../hoc/branch';
import './styles.css';

const branch = (p, a, b) => p ? a : b;

function ProjectCard({ name, description, imgUrl }) {

    const [showImage, setShowImage] = useState(true);

    return (
        <div className="ProjectCard">
            {/* <div className="ProjectCard" onClick={() => setShowImage(!showImage)}> */}
            {/* {branch(
                showImage,
                <ProjectCardImg
                    imgUrl={imgUrl}
                />,
                <ProjectCardText
                    name={name}
                    description={description}
                />)} */}
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
// const compose = (f, g) => x => f(g(x));

// const enhance = compose(
//     withState("showImage", "toggleImage", true),
//     branch(({showImage}) => toggleImage), ProjectCardImg, ProjectCardText)
// )

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string
}

export default ProjectCard;