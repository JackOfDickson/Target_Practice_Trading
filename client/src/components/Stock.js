import React, {useState} from "react";
import ReactModal from 'react-modal';

const Stock = ({coin, addCrypto, cashWallet}) => {

    const [amountInput, setAmountInput] = useState('');
    const [isBuyModalOpen, setIsBuyModalOpen] = useState(false)

    

    const handleBuySubmit = (event)=>
    {   
        event.preventDefault();
        addCrypto(coin, Number(amountInput), Number(amountInput));
        setAmountInput('')

        toggleModal()

    }

    const toggleModal =()=>
    {
        setIsBuyModalOpen(!isBuyModalOpen)
    }

    const modalStyle ={
     content: {
        border: '2px',
        borderRadius: '4px',
        bottom: 'auto',
        height: '200px',  // set height
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%', // start from center
        
        width: '40%',
        maxWidth: '40rem',
        transform: 'translate(-40%, -10%)'
    }}

    const handleAmountChange = (event)=>
    {
        if (event.target.value <= cashWallet)
        {
            setAmountInput(event.target.value)
        }
    }
    const priceTo2Decimals = parseFloat(coin.priceUsd).toFixed(2); // Show price to two decimal places
    const cryptoPrice = parseFloat(priceTo2Decimals).toLocaleString("en-US"); // Separate large numbers with commas

    return (
    <tr>
        <td>{coin.name}</td>
        <td>{coin.symbol}</td> 
        <td>Price: ${cryptoPrice}</td>
        <td>
            <button onClick={toggleModal}>Buy</button>
            <ReactModal
            style={modalStyle}
            isOpen={isBuyModalOpen}>
            <form onSubmit={handleBuySubmit}>


                <button type='submit'>Buy {coin.name}</button>
                <input type='decimal' value={amountInput} min='0' onChange={handleAmountChange} required></input>

            </form>
            <button onClick={toggleModal}>Cancel</button>
            </ReactModal>
        </td>
    </tr>
    )
}

export default Stock;