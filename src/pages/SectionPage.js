import { ProjectThumbnail } from "../components/ProjectThumbnail";

export function SectionPage(props) {
    return(

        <div id={props.sectionTitle}>
            <h1>{props.sectionTitle}</h1>
            <ProjectThumbnail title="Placeholder Project" desc="Placeholder Desc" status="WIP" />
            <ProjectThumbnail title="Placeholder Project" desc="Placeholder Desc" status="WIP" />
            <ProjectThumbnail title="Placeholder Project" desc="Placeholder Desc" status="WIP" />
        </div>

    );
};

function GenerateThumbnails(props) {
    for (let i = 0; i < props.projects.length; i++){
        
    }
}