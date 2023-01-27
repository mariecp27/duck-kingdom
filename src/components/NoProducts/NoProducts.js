import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function NoProducts() {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    }

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <div
            className="not-products"
            data-aos="fade-up"
        >
            <img src={process.env.PUBLIC_URL + "/assets/images/ups.png"} alt="No products"/>
            <h3>¡Oh!, de momento, no hay patitos con el nombre o categoría ingresados</h3>
            <button
                className="item-detail__text-container-back"
                onClick={handleGoHome}
            >
                <FontAwesomeIcon icon={faCircleArrowLeft}/>Ir al inicio
            </button>
        </div>
    )
}

export default NoProducts;