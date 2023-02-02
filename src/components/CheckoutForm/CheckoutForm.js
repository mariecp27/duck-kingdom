import React from 'react'

function CheckoutForm( { values, errors, handleInputChange, handleSubmit } ) {

    return (
        <section className="checkout-form">
            <h2>Detalles de facturación</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        value={values.name}
                    />
                    {errors.name && <small>{errors.name}</small>}
                </div>
                <div>
                    <label htmlFor="address">Dirección</label>
                    <input
                        id="address"
                        name="address"
                        onChange={handleInputChange}
                        type="text"
                        value={values.address}
                    />
                    {errors.address && <small>{errors.address}</small>}
                </div>
                <div>
                    <label htmlFor="phone">Celular</label>
                    <input
                        id="phone"
                        name="phone"
                        onChange={handleInputChange}
                        type="number"
                        value={values.phone}
                    />
                    {errors.phone && <small>{errors.phone}</small>}
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        value={values.email}
                    />
                    {errors.email && <small>{errors.email}</small>}
                </div>
                <div>
                    <label htmlFor="paymentMethod">Medio de pago</label>
                    <select
                        name="paymentMethod"
                        id="paymentMethod"
                        onChange={handleInputChange}
                        value={values.paymentMethod}
                    >
                        <option value={""} disabled>Selecciona un método de pago</option>
                        <option value={"mastercard"}>Mastercard</option>
                        <option value={"visa"}>Visa</option>
                        <option value={"amazonPay"}>Amazon Pay</option>
                    </select>
                    {errors.paymentMethod && <small>{errors.paymentMethod}</small>}
                </div>
                <div>
                    <label htmlFor="card">Número de tarjeta</label>
                    <input
                        id="card"
                        name="card"
                        onChange={handleInputChange}
                        type="number"
                        value={values.card}
                    />
                    {errors.card && <small>{errors.card}</small>}
                </div>
                <div className="checkout-form_card">
                    <div className="checkout-form_due-date">                            
                        <label>Vencimiento</label>
                        <div>
                            <input
                                name="dueDateMonth"
                                onChange={handleInputChange}
                                type="number"
                                value={values.dueDateMonth}
                                placeholder="MM"
                                min={1}
                                max={12}
                            /> 
                            <input
                                name="dueDateYear"
                                onChange={handleInputChange}
                                type="number"
                                value={values.dueDateYear}
                                placeholder="YY"
                                min={1}
                                max={99}
                            />
                        </div>
                    </div>
                    <div className="checkout-form_cvc">
                        <label htmlFor="cvc">CVC</label>
                        <input
                            id="cvc"
                            name="cvc"
                            onChange={handleInputChange}
                            type="number"
                            value={values.cvc}
                            min={0}
                            max={999}
                        />
                    </div>
                    {errors.cardOthers && <small>{errors.cardOthers}</small>}
                </div>
                <button>Finalizar compra</button>
            </form>
        </section>
    )
}

export default CheckoutForm;