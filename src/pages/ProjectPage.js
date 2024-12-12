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
                
                <h1>Breakdown</h1>
                <h2>Project Description</h2>
                <p>{project.pagecontent[0]}</p>
                <h2>Process & Problems & Solutions</h2>
                <p>{project.pagecontent[1]}</p>
                <h2>What's Next?</h2>
                <p>{project.pagecontent[2]}</p>
            </div>
        </>
    )
}