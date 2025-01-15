import { Download } from "../components/Download"

export function ContactPage() {
    return (
        <div id="contact">
            <h1>Contact Me!</h1>
            <ul id="contact-info">
                <li><a href="https://www.linkedin.com/in/jabrecia-washington/">LinkedIn</a></li>
                <li><a href="mailto:jabwashi2@gmail.com">Email</a></li>
                <li><a href="https://github.com/jabwashi2">GitHub</a></li>
                <li><Download /></li>
            </ul>
        </div>
    )
}