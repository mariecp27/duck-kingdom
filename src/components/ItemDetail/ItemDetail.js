import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { formatterPeso } from "../../helpers/formatterPeso";
import { useCartContext } from "../../context/CartContext";
import { useFavoritesContext } from "../../context/FavoritesContext";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail( { id, image, name, source, description, price, height, material, stock } ) {

    const { addToCart, productInCart } = useCartContext();
    const { addToFavorites, productInFavorites, removeFromFavorites } = useFavoritesContext();

    const [amount, setAmount] = useState(1);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleAddToCart = () => {
        const product = {
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
        }

        addToCart(product);
    }

    const handleAddFavorite = () => {
        const product = {
            id,
            image,
            name,
            source,
            price
        }

        addToFavorites(product);
    }

    const handleRemoveFromFavorites = () => {
        removeFromFavorites(id);
    }

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <article
            className="item-detail"
            data-aos="fade-up"
        >
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <div className="item-detail__text-container">
                <div>
                    <FontAwesomeIcon
                        icon={ faHeart }
                        className={`item-detail__favorite ${productInFavorites(id) ? "active" : ""}`} 
                        onClick={!productInFavorites(id) ? handleAddFavorite : handleRemoveFromFavorites}
                    />
                    <h3 className="productName">{name}</h3>
                    <em>{source}</em>
                </div>
                <div>
                    <p>{description}</p>
                    <p><strong>Altura: </strong>{height}</p>
                    <p><strong>Material: </strong>{material}</p>
                    <p><strong>Patitos disponibles: </strong>{stock}</p>
                    <strong className="item-detail__text-container-price">{formatterPeso(price)}</strong>
                    {
                        <ItemCount
                            id={id}
                            stock={stock}
                            amount={amount}
                            setAmount={setAmount}
                            handleAddToCart={handleAddToCart}
                            productInCart={productInCart}
                        />
                    }
                    <button className="item-detail__text-container-back" onClick={handleGoBack}>
                        <FontAwesomeIcon icon={faCircleArrowLeft}/>Volver
                    </button>
                </div>
            </div>
        </article>    
    )
}

export default ItemDetail;