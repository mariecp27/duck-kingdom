import Item from "../Item/Item";

function ItemList( { products } ) {
    return (
        <div className="item-list">
            <h1>Nuestros Patitos</h1>
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