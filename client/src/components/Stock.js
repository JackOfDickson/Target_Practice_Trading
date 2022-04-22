import React from "react";

const Stock = ({coin, addCrypto}) => {

    const handleAddClick = ()=>
    {
        addCrypto(coin);
    }

    const priceTo4Decimals = parseFloat(coin.priceUsd).toFixed(4)

    return (
    <>
       <p>{coin.id}  value: {priceTo4Decimals}</p>
       <button onClick={handleAddClick}>Buy coin</button>
    </>
    )
}

export default Stock;