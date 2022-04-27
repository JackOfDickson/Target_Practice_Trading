
export const CurrencyFormatter = (value) => {

    let decimals;
    const formattedValue = parseFloat(value);

    if (value < 0.1) {
        decimals = 4;
    } else {
        decimals = 2;
    };

    const currencySettings = {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: decimals,
    }
    const finalNumber = formattedValue.toLocaleString("en-US", currencySettings)

return finalNumber;

};