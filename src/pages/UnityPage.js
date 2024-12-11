// this page will hold the 

import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'

// category name: "unity"

export function UnityPage(props) {
    return(
        <div>
            {dataJSON.projects.map((project) => project.category === "unity" ? <ProjectThumbnail path={project.path} title={project.title} desc={project.shortdesc} status={project.status}/> : "")}
        </div>
    );
};

