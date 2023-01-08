import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Item from "../Item/Item";

function ItemList( { products } ) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className="item-list"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true">
            <img src={process.env.PUBLIC_URL + "/assets/images/title.png"} alt="Título" className="item-list_title" />
            <hr />
            <div className="container-fluid">
                <section className="row row-cols-lg-5 justify-content-center m-0">
                    {
                        products.map( product => (
                            <Item {...product} key={product.id} />
                        ))
                    }
                </section>
            </div>
        </div>
    )     
}

export default ItemList;