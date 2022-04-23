import React from "react"

const MoversShakers = ({cryptos}) => {



    // function to sort cryptos by the best performing cryptos over the last 24 hours
    const bestCryptos = cryptos.sort(function(a, b) {
        return b.changePercent24Hr-a.changePercent24Hr;
    });

    // function to sort cryptos by the worst performing cryptos over the last 24 hours
    const cryptosCopy= cryptos.map((x) => x); // Create duplicate list in order to sort cryptos by worst performance
    const worstCryptos = cryptosCopy.sort(function(a, b) {
        return a.changePercent24Hr-b.changePercent24Hr;
    });

    // Find the top five cryptos over the last 24 hours
    const bestCryptosList = bestCryptos.slice(0, 5).map(coin=>{ 
        const diff = parseFloat(coin.changePercent24Hr).toFixed(2); // Only show two decimal places in percentage

            return (
                <>
            <p>{coin.name} {diff}%</p>
                </>
            )
        })

     // Find the worst five cryptos over the last 24 hours
    const worstCryptosList = worstCryptos.slice(0, 5).map(coin=>{ 
        const diff = parseFloat(coin.changePercent24Hr).toFixed(2); // Only show two decimal places in percentage

            return (
                <>
            <p>{coin.name} {diff}%</p>
                </>
            )
        })


    return (
        <div id="movers-shakers">
            <h3>Movers & Shakers</h3>
            <p>Check out the biggest shifts in the market over the last 24 hours.</p>
            
            <p>{bestCryptosList}</p>
            <p>{worstCryptosList}</p>

        </div>
    )
}
export default MoversShakers