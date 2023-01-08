import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function NotFound() {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className="not-found"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true">
            <img src={process.env.PUBLIC_URL + "/assets/images/404.png"} alt="404"/>
            <h3>¡Oh!, no hay nada aquí</h3>
            <button className="item-detail__text-container-back" onClick={handleHome}><FontAwesomeIcon icon = { faCircleArrowLeft } />Ir al inicio</button>
        </div>
    )
}

export default NotFound;