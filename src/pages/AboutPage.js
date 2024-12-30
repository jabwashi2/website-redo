import dataJSON from '../content.json'

export function AboutPage() {

    let about = dataJSON.about;
    return (
        <>
        <div id='about'>
            <img src={about.image} alt=""></img>
            <h1>{about.title}</h1>
            <p>{about.content}</p>
        </div>
            
        </>
    )
}