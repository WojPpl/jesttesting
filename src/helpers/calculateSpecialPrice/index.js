const calculateSpecialPrice = (price, tax, discount, showComma = true) => {

    const priceWithTax = price + (price * tax / 100);
    const priceWithDiscount = priceWithTax - (priceWithTax * discount/100);

    return showComma
        ? priceWithDiscount
            .toFixed(2)
            .replace(".", ",")
        : priceWithDiscount.toFixed(2);
};

export default calculateSpecialPrice;