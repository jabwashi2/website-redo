/*\
    category thumbnails need the following:
    - Title
    - Link to respective project page (link in the div)
*/

export function CategoryThumbnail(props) {
    return (
        <>
            <a href={props.path}>
                <div>
                    <h1>{props.title}</h1>
                </div>
            </a>
        </>
    );
};