// this page will hold the 

import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'

// category name: "web"

export function WebPage(props) {
    return(
        <div>
            {dataJSON.projects.map((project) => project.category === "web" ? <ProjectThumbnail title={project.title} desc={project.shortdesc} status={project.status} id={project.id} category={project.category}/> : "")} {/*<-- ternary operator filters out projects that don't have the web category*/}
        </div>
    );
};