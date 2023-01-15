import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";

function Rights() {
    return (
        <div className="rights">
            <hr />
            <a href="https://github.com/mariecp27" target="_blank" className="rights_icons" rel="noreferrer"><FontAwesomeIcon icon = { faGithub } /></a>
            <a href="https://www.linkedin.com/in/maria-herlandia-copete/?locale=en_US" target="_blank" className="rights_icons"  rel="noreferrer"><FontAwesomeIcon icon = { faLinkedin } /></a>
            <p>Los productos pertenecen a <a href="https://numskull.com/tubbz/" target="_blank"  rel="noreferrer">TUBBZ</a></p>
            <p>© 2023 Duck Kingdom, todos los derechos reservados</p>
        </div>
    )
}

export default Rights;