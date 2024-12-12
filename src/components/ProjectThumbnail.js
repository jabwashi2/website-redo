import { Link } from "react-router-dom";

export function ProjectThumbnail(props) {
    console.log(props.category)
    return (
        <>
            <div id={props.title}>
                {/* <a href={props.path}>
                    <h1>{props.title}</h1>
                </a> */}
                <Link to={ props.category === "web" ? "/Web-Projects/" + props.id : props.category === "unity" ? "/Unity-Projects/" + props.id : "/DirectX11-Projects/" + props.id}>
                    <h1>{props.title}</h1>
                </Link>
                {/* ^will link to a custom version of ProjectPage.js */}
                <p>{props.desc}</p>
                <p><em>{props.status}</em></p>
            </div>
            
        </>
    );
};

/* when you click the thumbnail, i want:
    - create the thumbail for the project you clicked on (pass in title)
    - load the new page with the thumbnail (maybe open a new page?)
*/