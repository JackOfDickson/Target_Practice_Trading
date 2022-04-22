import React, {useState} from "react";

const Stock = ({coin, addCrypto, cashWallet}) => {

    const [amountInput, setAmountInput] = useState('');

    const handleBuySubmit = (event)=>
    {   
        event.preventDefault();
        addCrypto(coin, Number(amountInput));
        setAmountInput('')
    }

    const handleAmountChange = (event)=>
    {
        if (event.target.value > cashWallet)
        {

        }
        else{
        setAmountInput(event.target.value)
        }
    }

    const priceTo4Decimals = parseFloat(coin.priceUsd).toFixed(4)

    return (
    <>
       <p>{coin.id}  value: {priceTo4Decimals}</p>
        <form onSubmit={handleBuySubmit}>
            <button type='submit'>Buy coin</button>
            <input type='number' value={amountInput} onChange={handleAmountChange} required></input>
        </form>
    </>
    )
}

export default Stock;