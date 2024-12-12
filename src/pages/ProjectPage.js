import { useParams } from 'react-router-dom'
import dataJSON from '../content.json'
// import {ProjectTemplate} from '../components/ProjectTemplate'

export function ProjectPage() {

    const {id} = useParams();
    let project = dataJSON.projects.find(project => project.id === id);

    return (
        <>
            <div id={id}>
                <h1>{project.title}</h1>
                {project.tools.map((tool) => <p>{tool}</p>)}
                {/* <p>There will be an image carousel here</p> */}
                <br></br>
                
                {/* <h1>Breakdown</h1>
                <h2>Lower Header 1</h2>
                <p>Describe stuff here</p>
                <h2>Lower Header 2</h2>
                <p>Describe stuff here</p>
                <h2>Lower Header 3</h2>
                <p>Describe stuff here</p> */}
            </div>
        </>
    )
}