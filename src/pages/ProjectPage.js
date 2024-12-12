import { useParams } from 'react-router-dom'
// import {ProjectTemplate} from '../components/ProjectTemplate'

export function ProjectPage(props) {

    const {id} = useParams();

    return (
        <>
            <p>{id}</p>
        </>
    )
}