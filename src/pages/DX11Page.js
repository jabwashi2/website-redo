// this page will hold the 

import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'

// category name: "directx11"

export function DX11Page(props) {
    return(
        <div>
            {dataJSON.projects.map((project) => project.category === "directx11" ? <ProjectThumbnail path={project.path} title={project.title} desc={project.shortdesc} status={project.status} id={project.id} category={project.category}/> : "Coming soon!")}
        </div>
    );
};

