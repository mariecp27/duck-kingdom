function ItemCount( { stock, amount, setAmount, handleAddToShoppingCar } ) {

    const handleSubtract = () => {
        amount > 1 && setAmount(amount - 1);
    }

    const handleAdd = () => {
        amount < stock && setAmount(amount + 1);
    }

    return (
        <div className="item-count">
            <div>
                <button className="item-count_subtract" onClick={handleSubtract}>-</button>
                <strong>{amount}</strong>
                <button className="item-count_add" onClick={handleAdd}>+</button>
            </div>
            <button className="item-count_add-to-car" onClick={handleAddToShoppingCar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;