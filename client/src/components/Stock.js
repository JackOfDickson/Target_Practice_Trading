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
    <tr>
        <td>{coin.id}</td>
        <td>{coin.symbol}</td> 
        <td>Price: {priceTo4Decimals}</td>
        <td><form onSubmit={handleBuySubmit}>
             <td><button type='submit'>Buy coin</button></td>
             <td><input type='number' value={amountInput}  min="0" onChange={handleAmountChange} required></input></td>
         </form></td>
     </tr>
    )
}

export default Stock;