import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';

const CurrencySelector = ({ currencyLabels, selectCurrency }) => {
    const [currentCurrency, setCurrentCurrency] = useState(currencyLabels[0]);
    const handleChange = (event) => {
        const name = event.target.value;
        setCurrentCurrency(name);
        selectCurrency(name);
    };
    return (
    <Box color="text.primary" style={{marginTop: "10px"}}>
        <Select
            native
            value={currentCurrency}
            onChange={handleChange}
            inputProps={{
                name: 'currency',
                id: 'currency-selector',
            }}
        >
            {
                currencyLabels.map((currency, key) => (
                    <option value={currency} key={key}>{currency}</option>
                ))
            }
        </Select>
    </Box>
)};

CurrencySelector.propTypes = {
    currencyLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleChange: PropTypes.func
};

export default CurrencySelector;