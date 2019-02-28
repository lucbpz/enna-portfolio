import React from 'react';

function ProjectCardImg({ imgUrl }) {
    return (
        <div className="ProjectCardImg">
            <img src={imgUrl} alt="cat" />
        </div>
    )
}

export default ProjectCardImg;