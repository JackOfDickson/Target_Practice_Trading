import React from "react";

const PortfolioItem = ({coin, index, sellCrypto, liveUpdate}) => {

    

    const handleSellClick = ()=>
    {
        sellCrypto(index);
    }


    const priceTo4Decimals = parseFloat(coin.coin.priceUsd).toFixed(4)
    const liveUpdateShort = parseFloat(liveUpdate).toFixed(2)
    const coinInvShort = parseFloat(coin.investment).toFixed(2)

    return (
    <div class="portfolio-item">
        <h3 class='port-item-title'>{coin.coin.id}</h3>  
        <p>Quantity of coin: {coin.coin_amount}</p>
        <p>Purchase price: ${priceTo4Decimals} </p>
        <p>Amount invested: ${coinInvShort}</p>
        <p>Sells now for: ${liveUpdateShort}</p>
        <button onClick={handleSellClick}>sell coin</button>
    </div>
    )
}
export default PortfolioItem