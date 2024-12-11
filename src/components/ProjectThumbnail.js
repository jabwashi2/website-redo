export function ProjectThumbnail(props) {
    return (
        <>
            <div id={props.title}>
                <a href={props.path}>
                    <h1>{props.title}</h1>
                </a>
                {/* ^will link to a custom version of ProjectPage.js */}
                <p>{props.desc}</p>
                <p><em>{props.status}</em></p>
            </div>
            
        </>
    );
};