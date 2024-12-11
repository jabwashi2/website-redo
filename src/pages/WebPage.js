// this page will hold the 

import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'

export function WebPage(props) {
    return(
        <div>
            {dataJSON.projects.map((project) => project.category === "web" ? <ProjectThumbnail path={project.path} title={project.title} desc={project.shortdesc} status={project.status}/> : "")}
        </div>
    );
};

