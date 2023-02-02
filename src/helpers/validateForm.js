export const validateForm = (value) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (value.name.includes("  ") || !value.name.trim() || !regexName.test(value.name.trim())) {
        errors.name = "Ingresa un nombre válido";
    } else if (value.name.length < 5) {
        errors.name = "Tu nombre ha de tener, al menos, 5 caracteres";
    }

    if (value.address.includes("  ") || !value.address.trim()) {
        errors.address = "Ingresa una dirección válida";
    }

    if (value.phone.length < 7) {
        errors.phone = "Tu número ha de tener, al menos, 7 dígitos";
    }

    if (!regexEmail.test(value.email.trim())) {
        errors.email = "Ingresa un e-mail con un formato válido";
    }

    if (value.paymentMethod === "") {
        errors.paymentMethod = "Selecciona un método de pago";
    }

    if (value.card.length !== 16) {
        errors.card = "El número de tarjeta ha de tener 16 dígitos";
    }

    if (value.dueDateMonth === "" || value.dueDateYear === "" || value.cvc === "") {
        errors.cardOthers = "Ingresa la información de tu tarjeta";

    } else if (value.dueDateMonth.length > 2 || value.dueDateYear.length > 2 || value.cvc.length > 3) {
        errors.cardOthers = "Verifica la información de tu tarjeta";
    }

    return errors;
}
