import { Download } from "../components/Download"

export function ContactPage() {
    return (
        <>
            <div id='contact'>
                <h1>Contact Me!</h1>
                <a href="https://www.linkedin.com/in/jabrecia-washington/">LinkedIn</a>
                <a href="mailto:jabwashi2@gmail.com">Email</a>
                <a href="https://github.com/jabwashi2">GitHub</a>
                <Download />
                {/* <a href="images/Jabrecia_Washington_Resume.pdf/">Resume</a> */}
            </div>
        </>
    )
}