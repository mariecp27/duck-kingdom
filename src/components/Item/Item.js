import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatterPeso } from "../../helpers/formatterPeso";
import AOS from "aos";
import "aos/dist/aos.css";

function Item( { id, image, name, source, price } ) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <article
            className="item col-7 col-sm-5 col-md-3"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true">
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <h3>{name}</h3>
            <h4>{source}</h4>
            <strong>{formatterPeso(price)}</strong>
            <Link to={`/item/${id}`} className="item_link">Detalle</Link>
        </article>    
    )
}

export default Item;