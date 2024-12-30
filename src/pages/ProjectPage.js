import { useParams } from 'react-router-dom'
import { ImageCarousel } from '../components/ImageCarousel';
import dataJSON from '../content.json'
// import {ProjectTemplate} from '../components/ProjectTemplate'

export function ProjectPage() {

    const {id} = useParams();
    let project = dataJSON.projects.find(project => project.id === id);

    return (
        <>
            <div id={id}>
                <a href={project.link}><h1>{project.title}</h1></a>
                {project.tools.map((tool) => <p>{tool}</p>)}
                <ImageCarousel images={project.images}/>
                <br></br>
                
                <h1 id="breakdown_title">Breakdown</h1>
                <h2 class="projsubhead" id="proj_desc_title">Project Description</h2>
                <p class="projcontent" id="proj_desc">{project.pagecontent[0]}</p>
                <h2 class="projsubhead" id="process_desc_title">Process & Problems & Solutions</h2>
                <p class="projcontent" id="process_desc">{project.pagecontent[1]}</p>
                <h2 class="projsubhead" id="next_desc_title">What's Next?</h2>
                <p class="projcontent" id="next_desc">{project.pagecontent[2]}</p>
            </div>
        </>
    )
}