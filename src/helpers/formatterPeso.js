export const formatterPeso = (value) => {

    const formatter = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        currencyDisplay: "code"
    });

    return formatter.format(value);
}