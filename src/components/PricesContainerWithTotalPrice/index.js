import React from "react";
import PropTypes from "prop-types";
import Box from '@material-ui/core/Box';
import calculateSpecialPrice from "../../helpers/calculateSpecialPrice";
import priceWithTax from "../../helpers/priceWithTax";
import ShowPrices from "../ShowPrices";

const PricesContainerWithTotalPrice = ({ prices }) =>  {
    let totalPrice = 0;
    prices.forEach( price =>{
        totalPrice += price.discount ? parseFloat(calculateSpecialPrice(price.basePrice, price.tax, price.discount, false)) : parseFloat(priceWithTax(price.basePrice, price.tax, false));
    });
    return (
    <Box>
        {prices.map((price, index) => (
            <ShowPrices tax={price.tax} basePrice={price.basePrice} discount={price.discount} key={index}/>
        ))}
        <Box style={{color: "#582ea5"}}>Total price: {totalPrice.toFixed(2)
            .replace(".", ",")} PLN</Box>
    </Box>
)}

PricesContainerWithTotalPrice.propTypes = {
    prices: PropTypes.arrayOf(PropTypes.shape({
        basePrice: PropTypes.number.isRequired,
        tax: PropTypes.number.isRequired,
        discount: PropTypes.number
    }))
};

export default PricesContainerWithTotalPrice;