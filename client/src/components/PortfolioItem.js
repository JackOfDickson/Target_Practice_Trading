import React from "react";
import sound from './sounds/sell.mp3';
import { CurrencyFormatter } from './CurrencyFormatter';

const PortfolioItem = ({coin, index, sellCrypto, liveUpdate}) => {
  
    const handleSellClick = () =>
    {
        sellCrypto(index);
        audioPlay.play();
        
    }

    const audioPlay = new Audio (sound);
    const liveUpdateShort = CurrencyFormatter(liveUpdate);
    const coinInvShort = CurrencyFormatter(coin.investment);

    let purchasePrice;
    if (coin.coin.priceUsd < 0.1) {
        purchasePrice = CurrencyFormatter(coin.coin.priceUsd); // Format coin price to more decimals if it has a low price
    } else {
        purchasePrice = CurrencyFormatter(coin.coin.priceUsd); // Format coin price
    }


    return (
    <div class="portfolio-item">
        <h3 class='port-item-title'>{coin.coin.name}</h3>  
        <p>Quantity of coin: {coin.coin_amount}</p>
        <p>Purchase price: {purchasePrice} </p>
        <p>Amount invested: {coinInvShort}</p>
        <p>Sells now for: {liveUpdateShort}</p>
        <button onClick={handleSellClick}>Sell Coin</button>
    </div>
    )
}
export default PortfolioItem