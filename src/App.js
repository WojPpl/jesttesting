import React, { useState } from "react";
import './App.css';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CurrencySelector from "./components/CurrencySelector";

import ShowPrices from "./components/ShowPrices";
import prices from "./mockData/prices";
import PricesContainerWithTotalPrice from "./components/PricesContainerWithTotalPrice";
import exchangeCurrency from  "./helpers/exchangeCurrency";

const App = () => {
  const currencyLabels = ["PLN", "USD", "EUR"];
  const [currencyValue, setCurrencyValue] = useState(100);
  const [oldCurrency, setOldCurrency] = useState("PLN");

  const currencyHandle = name => {
      setCurrencyValue(parseFloat(exchangeCurrency(currencyValue, oldCurrency, name, false)));
      setOldCurrency(name);
    }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Komponenty korzystające z testowanych helperów
        </p>
      </header>
        <Container fixed>
            <Box>
                <Box style={{background: "#dfecec", padding: "10px 0"}}>Wyświetlanie pojedynczej ceny:</Box>
                <Box><ShowPrices tax={prices[0].tax} basePrice={prices[0].basePrice}/></Box>
                <Box><ShowPrices tax={prices[2].tax} basePrice={prices[2].basePrice} discount={prices[2].discount}/></Box>
            </Box>
            <Box>
                <Box style={{background: "#dfecec", padding: "10px 0", margin: "40px 0 20px"}}>Zmiana waluty:</Box>
                <Box><span>{currencyValue} {oldCurrency}</span><CurrencySelector currencyLabels={currencyLabels} selectCurrency={currencyHandle}/></Box>
            </Box>
            <Box>
                <Box style={{background: "#dfecec", padding: "10px 0", margin: "40px 0 20px"}}>Kontener z walutą i podsumowaniem:</Box>
                <Box><PricesContainerWithTotalPrice prices={prices}/> </Box>
            </Box>
        </Container>
    </div>
  );
}

export default App;
