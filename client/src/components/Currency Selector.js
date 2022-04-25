import React, {useEffect, useState} from "react"

const CurrencySelector = ({cryptos, onCurrencySelect, handleMysteryCoin}) => {
    
    const [mysteryOptions, setMysteryOptions] = useState([])
    
    
    useEffect (() => {
        setOptions();
    })
    
    const onMysteryCoinClick = () => {
        handleMysteryCoin(mysteryOptions)
    }

    const setOptions = () => {
        const mysteryItems = []
        const getMysteryOptions = cryptos.map((item) => {
        if (parseInt(item.rank) < 6) {
            mysteryItems.push(item)
        }
        return mysteryItems
        })
        setMysteryOptions(mysteryItems)
    }
     
    
    const handleSelect = function (event) {
        event.preventDefault();
        const selectedCurrency = mysteryOptions[event.target.value];
        onCurrencySelect(selectedCurrency)
    }

    const options = mysteryOptions.map((crypto, index) => {
        return <option value={index} key={index}>{crypto.name}</option>
    })

    return (
        <div> 
        <h2>Mystery Coin</h2>
        <p>Select a currency to gamble on our mystery coin. If the currency you select matches the currency of our mystery coin, you will recieve an investment of $5000 in the mystery coin without it affecting your balance.
        However, if your selected currency does not match the currency of our mystery coin, $2000 will be deducted from your balance. Gamble wisely!</p>
        <select defaultValue="" onChange={handleSelect} required>
            <option value="" selected>Select a currency</option>
            {options}
        </select>
        <button onClick={onMysteryCoinClick}>Gamble on our mystery coin</button>
        
        </div>
    )

}

export default CurrencySelector;