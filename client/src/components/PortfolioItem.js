import React from "react";

const PortfolioItem = ({coin, index, sellCrypto, liveUpdate}) => {

    

    const handleSellClick = ()=>
    {
        sellCrypto(index);
    }


    const priceTo4Decimals = parseFloat(coin.coin.priceUsd).toFixed(4)

    return (
    <div class="portfolio-item">
        <h3 class='port-item-title'>{coin.coin.id}</h3>  
        <p>Quantity of coin: {coin.coin_amount}</p>
        <p>Purchase price: ${priceTo4Decimals} </p>
        <p>Amount invested: ${coin.investment}</p>
        <p>Sells now for: ${liveUpdate}</p>
        <button onClick={handleSellClick}>sell coin</button>
    </div>
    )
}
export default PortfolioItem