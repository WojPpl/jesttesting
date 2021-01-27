const priceWithTax = (price, tax, showComma = true) => {
    const basePrice =
        typeof price === "string" ? price.replace(",", ".") : price;
    const priceWithTax = parseFloat(basePrice) * (1 + tax/100);
    return showComma
        ? priceWithTax
            .toFixed(2)
            .replace(".", ",")
        : priceWithTax.toFixed(2);
};

export default priceWithTax;
