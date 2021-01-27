const exchangeCurrency = (price, currentCurrency, newCurrency, showComma = true) => {
    let currencyMultiplyValue;

    console.log("currentCurrency", currentCurrency);
    console.log("newCurrency", newCurrency);


    switch (currentCurrency) {
        case "PLN":
            console.log("aaa");
            switch (newCurrency) {
                case "USD":
                    currencyMultiplyValue = 0.27
                    break;
                case "EUR":
                    currencyMultiplyValue = 0.22
                    break;
                default:
                    currencyMultiplyValue = 1
                    break;
            }
            break;
        case "USD":
            console.log("bbb");
            switch (newCurrency) {
                case "PLN":
                    currencyMultiplyValue = 3.74
                    break;
                case "EUR":
                    currencyMultiplyValue = 0.82
                    break;
                default:
                    currencyMultiplyValue = 1
                    break;
            }
            break;
        case "EUR":
            console.log("ccc");
            switch (newCurrency) {
                case "USD":
                    currencyMultiplyValue = 1.21
                    break;
                case "PLN":
                    currencyMultiplyValue = 4.55
                    break;
                default:
                    currencyMultiplyValue = 1
                    break;
            }
        }

    console.log("price", price, "multiplier", currencyMultiplyValue);
    const newPrice = parseFloat(price) * currencyMultiplyValue;

    return showComma
        ? newPrice
            .toFixed(2)
            .replace(".", ",")
        : newPrice.toFixed(2);
};

export default exchangeCurrency;