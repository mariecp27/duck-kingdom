import { useEffect } from "react";

function ItemListContainer() {

    const requestData = () => {
        return new Promise( (resolve) => {
            setTimeout( () => {
                resolve('');
            }, 1000);
        });
    }

    useEffect( () => {
        requestData()
            .then( (res) => {

            })
            .catch( (err) => {
                console.log(err);
            });
    });

    return (
        <div className="item-list-container">
            <h1>Productos</h1>
            <hr />
            <div>
                <h3></h3>
                <p></p>
                <strong></strong>
            </div>
        </div>
    );
}

export default ItemListContainer;