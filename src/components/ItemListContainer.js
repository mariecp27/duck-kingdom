function ItemListContainer( {greeting, children} ) {
    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            {children}
        </div>
    );
}

export default ItemListContainer;