import { useCartContext } from "../../context/CartContext";
import { formatterPeso } from "../../helpers/formatterPeso";

function PurchaseSummary( { getTotal } ) {

    const { cart, totalCart } = useCartContext();

    return (
        <section>
            <h2>Resumen de compra</h2>
            {
                cart.map(product => (
                    <article key={product.id}>
                        <p className="productName">{product.name}</p>
                        <strong>{formatterPeso(product.price * product.amount)}</strong>
                        <p>{product.amount}</p>
                    </article>
                ))
            }
            <p>Subtotal: {formatterPeso(totalCart())}</p>
            <p>IVA: 19%</p>
            <p>Envío: {formatterPeso(10000)}</p>
            <strong>Total: {formatterPeso(getTotal())}</strong>
        </section> 
    )
}

export default PurchaseSummary;