import React, { Component } from 'react';
import './styles.css';
import Projects from './Projects';
class Work extends Component {
    componentDidMount() {
        const markdownContext = require.context('../../../_posts/projects', false, /\.md$/);
    }
    render() {
        return (
            <div className="Work">
                <Projects />
            </div>
        );
    }
}

export default Work;
