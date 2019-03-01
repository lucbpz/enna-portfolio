import React from 'react';
import './styles.css';
import Projects from './Projects';
import WithLoadingSpinner from '../../hoc/WithLoadingSpinner';

const Work = (props) => {
    return (  
        <div className="Work">
            <Projects projects={props}/>
        </div>
    );
}

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            async () => {
                const importAll = (r) => r.keys().map(r);
                const markdownFiles = importAll(require.context('../../../_posts/projects', false, /\.md$/)).sort()
                    .reverse();
                resolve(Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
                    .catch((err) => console.error(err)));
            },
            2000
        );
    });
};

export default WithLoadingSpinner(fetchData)(Work);
