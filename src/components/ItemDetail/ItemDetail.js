import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { formatterPeso } from "../../helpers/formatterPeso";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail( { id, image, name, source, description, price, height, material, stock } ) {

    const [amount, setAmount] = useState(1);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleAddToShoppingCar = () => {
        console.log({
            id,
            image,
            name,
            source,
            description,
            price,
            height,
            material,
            stock,
            amount
        });
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
                    <ItemCount
                        stock={stock}
                        amount={amount}
                        setAmount={setAmount}
                        handleAddToShoppingCar={handleAddToShoppingCar}
                    />
                    <button className="item-detail__text-container-back" onClick={handleGoBack}><FontAwesomeIcon icon = { faCircleArrowLeft } />Volver</button>
                </div>
            </div>
        </article>    
    )
}

export default ItemDetail;