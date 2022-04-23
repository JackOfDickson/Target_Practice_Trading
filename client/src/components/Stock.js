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

    const priceTo2Decimals = parseFloat(coin.priceUsd).toFixed(2); // Show price to two decimal places
    // const cryptoPrice = parseFloat(priceTo2Decimals).toLocaleString("en-US"); // Separate large numbers with commas

    return (
    <tr>
        <td>{coin.name}</td>
        <td>{coin.symbol}</td> 
        <td>Price: ${priceTo2Decimals}</td>
        <td>
            <form onSubmit={handleBuySubmit}>
                <button type='submit'>Buy Coin</button>
                <input type='number' value={amountInput} min="0" onChange={handleAmountChange} required></input>
            </form>
        </td>
    </tr>
    )
}

export default Stock;