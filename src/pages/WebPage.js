// this page will hold the 

import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'

// category name: "web"

export function WebPage(props) {
    return(
        <div>
            {dataJSON.projects.map((project) => project.category === "web" ? <ProjectThumbnail path={project.path} title={project.title} desc={project.shortdesc} status={project.status}/> : "")} {/*<-- ternary operator filters out projects that don't jave the web category*/}
        </div>
    );
};

