import React from "react";

const Stock = ({coin}) => {

    const priceTo4Decimals = parseFloat(coin.priceUsd).toFixed(4)

    return (
       <p>{coin.id}  value: {priceTo4Decimals}</p>
    )
}

export default Stock;