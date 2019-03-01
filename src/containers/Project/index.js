import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import emoji from 'emoji-dictionary'

const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));

const Project = (props) => {
    const project = props.location.state;
    return (
        <div style={{ marginTop: '16%', padding: '8%' }}>
            <Link to="/">
                <button>go back</button>
            </Link>
            <div>{project.name}</div>
            <div>{project.description}</div>
            <img style={{maxWidth: '80%'}} src={project.thumbnail} alt={project.name}/>
            <ReactMarkdown source={project.body} renderers={{ text: emojiSupport }} />
        </div>
    )
};

export default Project;