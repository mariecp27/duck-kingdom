import Item from "../Item/Item";

function ItemList( { products } ) {
    return (
        <div>
            <h1>Productos</h1>
            <hr />
            <section>
                {
                    products.map( product => (
                        <Item {...product} key={product.id} />
                    ))
                }
            </section>
        </div>
    )     
}

export default ItemList;