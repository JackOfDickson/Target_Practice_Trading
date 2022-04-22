import React from "react";

const Stock = ({coin}) =>
{
    return (
       <p>{coin.id}  value: {coin.priceUsd}</p>
    )
}

export default Stock;