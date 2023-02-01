import React from 'react'

function CheckoutForm( { values, setValues, handleSubmit } ) {

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return (
        <section>
            <h2>Información del cliente</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input
                    className=""
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    value={values.name}
                    required
                />
                <label htmlFor="address">Dirección</label>
                <input
                    className=""
                    id="address"
                    name="address"
                    onChange={handleInputChange}
                    type="text"
                    value={values.address}
                    required
                />
                <label htmlFor="phone">Celular</label>
                <input
                    className=""
                    id="phone"
                    name="phone"
                    onChange={handleInputChange}
                    type="tel"
                    value={values.phone}
                    required
                />
                <label htmlFor="email">E-mail</label>
                <input
                    className=""
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    value={values.email}
                    required
                />
                <label htmlFor="paymentMethod">Medio de pago</label>
                <select
                    name="paymentMethod"
                    id="paymentMethod"
                    onChange={handleInputChange}
                    value={values.paymentMethod}
                    required
                >
                    <option value={""} disabled>Selecciona un método de pago</option>
                    <option value={"mastercard"}>Mastercard</option>
                    <option value={"visa"}>Visa</option>
                    <option value={"amazonPay"}>Amazon Pay</option>
                </select>
                <label htmlFor="card">Número de tarjeta</label>
                <input
                    className=""
                    id="card"
                    name="card"
                    onChange={handleInputChange}
                    type="number"
                    value={values.card}
                    required
                />
                <label>Vencimiento</label>
                <input
                    className=""
                    name="dueDateMonth"
                    onChange={handleInputChange}
                    type="number"
                    value={values.dueDateMonth}
                    placeholder="MM"
                    min={1}
                    max={12}
                    required
                />
                <input
                    className=""
                    name="dueDateYear"
                    onChange={handleInputChange}
                    type="number"
                    value={values.dueDateYear}
                    placeholder="YY"
                    min={1}
                    max={99}
                    required
                />
                <label htmlFor="cvc">CVC</label>
                <input
                    className=""
                    id="cvc"
                    name="cvc"
                    onChange={handleInputChange}
                    type="number"
                    value={values.cvc}
                    min={0}
                    max={999}
                    required
                />
                <button>Finalizar compra</button>
            </form>
        </section>
    )
}

export default CheckoutForm;