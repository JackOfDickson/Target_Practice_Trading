import React from "react";
import './css/MoversShakers.css'

const MoversShakers = ({cryptos}) => {


    // function to sort cryptos by the best performing cryptos over the last 24 hours
    const cryptosCopy= cryptos.map((x) => x); // Create duplicate list in order to sort cryptos by worst performance
    const bestCryptos = cryptosCopy.sort(function(a, b) {
        return b.changePercent24Hr-a.changePercent24Hr;
    });

    // function to sort cryptos by the worst performing cryptos over the last 24 hours
    const cryptosCopy2= cryptos.map((x) => x); // Create duplicate list in order to sort cryptos by worst performance
    const worstCryptos = cryptosCopy2.sort(function(a, b) {
        return a.changePercent24Hr-b.changePercent24Hr;
    });

    // Find the top five cryptos over the last 24 hours
    const bestCryptosList = bestCryptos.slice(0, 5).map(coin=>{ 
        const diff = parseFloat(coin.changePercent24Hr).toFixed(2); // Only show two decimal places in percentage

        const formatPrice = parseFloat(coin.priceUsd).toFixed(2);
        const coinPrice = parseFloat(formatPrice).toLocaleString("en-US"); // Separate large numbers with commas

            return (
                <div className="bestCryptoDetails">
                    <p>{coin.name}  ({coin.symbol}) &nbsp;${coinPrice}  <span className="bestPercentage">{diff}%</span></p>
                </div>
            )
        })

     // Find the worst five cryptos over the last 24 hours
    const worstCryptosList = worstCryptos.slice(0, 5).map(coin=>{ 
        const diff = parseFloat(coin.changePercent24Hr).toFixed(2); // Only show two decimal places in percentage

        const formatPrice = parseFloat(coin.priceUsd).toFixed(2);
        const coinPrice = parseFloat(formatPrice).toLocaleString("en-US"); // Separate large numbers with commas


            return (
                <div className="worstCryptoDetails">
                    <p>{coin.name} ({coin.symbol}) &nbsp;${coinPrice} <span className="worstPercentage">{diff}%</span></p>
                </div>
            )
        })

 

    return (
        <div id="movers-shakers">
            <h3>Movers & Shakers</h3>
            <p>Check out the biggest shifts in the market over the last 24 hours.</p>
            
            <div id="movers-shakers-box">
                <div className="best">{bestCryptosList}</div>
                <div className="worst">{worstCryptosList}</div>
            </div>
        </div>
    )
}
export default MoversShakers;