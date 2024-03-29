import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatterPeso } from "../../helpers/formatterPeso";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useFavoritesContext } from "../../context/FavoritesContext";

function Item( { id, image, name, source, price, stock } ) {

    const { addToFavorites, productInFavorites, removeFromFavorites } = useFavoritesContext();

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

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

    return (
        <article
            className={`item col-7 col-sm-5 col-md-3 ${stock === 0 ? "item__no-stock" : ""}`}
            data-aos="fade-up"
        >
            <FontAwesomeIcon
                icon={ faHeart }
                className={`item__favorite ${productInFavorites(id) ? "active" : ""}`} 
                onClick={!productInFavorites(id) ? handleAddFavorite : handleRemoveFromFavorites} />
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <h3 className="productName">{name}</h3>
            <h4>{source}</h4>
            <strong>{formatterPeso(price)}</strong>
            {
                stock === 0 &&
                    <img
                        src={process.env.PUBLIC_URL + "/assets/images/noStock.png"}
                        alt="Item without stock"
                        className="item__no-stock-img"
                    />
            }
            <Link to={`/item/${id}`} className="item_link">Detalle</Link>
        </article>    
    )
}

export default Item;