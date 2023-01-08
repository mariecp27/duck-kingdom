import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { formatterPeso } from "../../helpers/formatterPeso";
import ItemCount from "./ItemCount";

function ItemDetail( { image, name, source, description, price, height, material, stock } ) {
    
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <article
            className="item-detail"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true">
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <div className="item-detail__text-container">
                <div>
                    <h3>{name}</h3>
                    <em>{source}</em>
                </div>
                <div>
                    <p>{description}</p>
                    <p><strong>Altura: </strong>{height}</p>
                    <p><strong>Material: </strong>{material}</p>
                    <p><strong>Patitos disponibles: </strong>{stock}</p>
                    <strong className="item-detail__text-container-price">{formatterPeso(price)}</strong>
                    <ItemCount stock={stock}/>
                    <button className="item-detail__text-container-back" onClick={handleBack}><FontAwesomeIcon icon = { faCircleArrowLeft } />Volver</button>
                </div>
            </div>
        </article>    
    )
}

export default ItemDetail;