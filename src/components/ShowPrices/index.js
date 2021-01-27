import React from "react";
import PropTypes from "prop-types";
import Box from '@material-ui/core/Box';
import calculateSpecialPrice from "../../helpers/calculateSpecialPrice";
import priceWithTax from "../../helpers/priceWithTax";

const ShowPrices = ({ basePrice, tax, discount }) =>  (
        <Box color="text.primary" style={{margin: "20px 0"}}>
            <span style={{color: "#233b52", paddingLeft: "10px"}}>{basePrice.toFixed(2)
                .replace(".", ",")} PLN</span>
            <span style={discount > 0 ? {color: "#b60c0c", textDecoration: "line-through", paddingLeft: "10px"} : {color: "#d07a34", paddingLeft: "10px"}}>{priceWithTax(basePrice, tax)} PLN (+{tax}%)</span>
            { discount > 0 && (<span style={{color: "#3eba32", paddingLeft: "10px"}}>{calculateSpecialPrice(basePrice,tax,discount)} PLN</span>)}
        </Box>
    );

ShowPrices.propTypes = {
    basePrice: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    discount: PropTypes.number
};

export default ShowPrices;