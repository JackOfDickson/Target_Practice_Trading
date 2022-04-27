import React from "react";
import sound from './sounds/sell.mp3';


const PortfolioItem = ({coin, index, sellCrypto, liveUpdate}) => {
  
    const handleSellClick = () =>
    {
        sellCrypto(index);
        audioPlay.play();
        
    }

    const audioPlay = new Audio (sound);


    const priceTo2Decimals = parseFloat(coin.coin.priceUsd).toFixed(2).toLocaleString("en-US");
    const liveUpdateShort = parseFloat(liveUpdate).toFixed(2).toLocaleString("en-US");
    const coinInvShort = parseFloat(coin.investment).toFixed(2).toLocaleString("en-US");

    return (
    <div class="portfolio-item">
        <h3 class='port-item-title'>{coin.coin.name}</h3>  
        <p>Quantity of coin: {coin.coin_amount}</p>
        <p>Purchase price: ${priceTo2Decimals} </p>
        <p>Amount invested: ${coinInvShort}</p>
        <p>Sells now for: ${liveUpdateShort}</p>
        <button onClick={handleSellClick}>Sell Coin</button>
    </div>
    )
}
export default PortfolioItem