export function ProjectThumbnail(props) {
    return (
        <>
            <a href="placeholder">
                <h1>{props.title}</h1> 
                {/* ^will link to a custom version of ProjectPage.js */}
                <p>{props.desc}</p>
                <p><em>{props.status}</em></p>
            </a>
        </>
    );
};