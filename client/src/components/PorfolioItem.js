import React from "react";

const PortfolioItem = ({coin, index, sellCrypto}) => {

    

    const handleSellClick = ()=>
    {
        sellCrypto(coin, index);
    }


    const priceTo4Decimals = parseFloat(coin.coin.priceUsd).toFixed(4)

    return (
    <>
        <p>{coin.coin.id}  value: {priceTo4Decimals} amount invested: {coin.investment}</p>
        <button onClick={handleSellClick}>sell coin</button>
        
    </>
    )
}
export default PortfolioItem