import { Link } from "react-router-dom";

function NoCart() {

    return (
        <div className="no-cart">
            <img src={process.env.PUBLIC_URL + "/assets/images/oh.png"} alt="Título" className="cart_title" />
            <h2>Parece que aún no hay patitos en tu carrito de compras</h2>
            <Link to = {"/products"}>Ver todos los patitos</Link>
        </div>
    )
}

export default NoCart;