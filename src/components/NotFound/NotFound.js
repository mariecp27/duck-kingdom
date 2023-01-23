import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function NotFound() {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/duck-kingdom");
    }

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <div
            className="not-found"
            data-aos="fade-up"
        >
            <img src={process.env.PUBLIC_URL + "/assets/images/404.png"} alt="404"/>
            <h3>¡Oh!, no hay nada aquí</h3>
            <button className="item-detail__text-container-back" onClick={handleGoHome}><FontAwesomeIcon icon = { faCircleArrowLeft } />Ir al inicio</button>
        </div>
    )
}

export default NotFound;