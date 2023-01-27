import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
    return (
        <div className="social-media">
            <h3>Síguenos en redes</h3>
            <div className="social-media_links">
                <a
                    href="https://www.facebook.com/"
                    target="_blank" rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </div>
        </div>
    )
}

export default SocialMedia;