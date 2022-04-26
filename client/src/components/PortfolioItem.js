import React from "react";

const PortfolioItem = ({coin, index, sellCrypto, liveUpdate}) => {

    

    const handleSellClick = ()=>
    {
        sellCrypto(index);
    }


    const priceTo4Decimals = parseFloat(coin.coin.priceUsd).toFixed(4)

    return (
    <tr>
        <td>{coin.coin.id}</td>  
        <td>Amount of coin: {coin.coin_amount}</td>
        <td>value: {priceTo4Decimals} </td>
        <td> amount invested: ${coin.investment}</td>
        <td>Sells now for: ${liveUpdate}</td>
        <td><button onClick={handleSellClick}>sell coin</button></td>
    </tr>
    )
}
export default PortfolioItem