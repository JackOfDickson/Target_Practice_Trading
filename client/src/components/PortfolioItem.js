import React from "react";

const PortfolioItem = ({coin, index, sellCrypto}) => {

    

    const handleSellClick = ()=>
    {
        sellCrypto(index, coin.investment);
    }


    const priceTo4Decimals = parseFloat(coin.coin.priceUsd).toFixed(4)

    return (
    <tr>
        <td>{coin.coin.id}</td>  
        <td>value: {priceTo4Decimals} amount invested: {coin.investment}</td>
        <button onClick={handleSellClick}>sell coin</button>
    </tr>
    )
}
export default PortfolioItem