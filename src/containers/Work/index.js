import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './styles.css';
import Projects from './Projects';
import WithLoadingSpinner from '../../hoc/WithLoadingSpinner';

const Work = (props) => {
    return (  
        <div className="Work">
            <Projects projects={props}/>
            {/* {
                projects.map(project => (
                <ReactMarkdown source={project}/>
                ))
            } */}
        </div>
    );
}
// const fetchData = async () => {
//     const importAll = (r) => r.keys().map(r);
//     const markdownFiles = importAll(require.context('../../../_posts/projects', false, /\.md$/)).sort()
//         .reverse();
//     return await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
//         .catch((err) => console.error(err));
// }

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            async () => {
                const importAll = (r) => r.keys().map(r);
                const markdownFiles = importAll(require.context('../../../_posts/projects', false, /\.md$/)).sort()
                    .reverse();
                resolve(Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
                    .catch((err) => console.error(err)));
                // resolve([
                //     {
                //         name: "nombre1",
                //         description: "description1",
                //         imgUrl: "https://cdn.petcarerx.com/LPPE/images/articlethumbs/Cat-Scratch-Fever-Small.jpg"
                //     },
                //     {
                //         name: "nombre2",
                //         description: "description2",
                //         imgUrl: "https://cdn.petcarerx.com/LPPE/images/articlethumbs/Cat-Scratch-Fever-Small.jpg"
                //     }
                // ])
            },
            2000
        );
    });
};

export default WithLoadingSpinner(fetchData)(Work);
