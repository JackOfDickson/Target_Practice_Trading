import './css/UserStats.css'


const UserStats = ({activeUser, investmentValue}) => {

    const formatbalance = parseFloat(activeUser.cash).toFixed(2); // format to two decimal places
    const activeBalance = parseFloat(formatbalance).toLocaleString("en-US"); // Separate large numbers with commas

    const numberOfInvestments = (activeUser.portfolio).length; // Number of purchases

    // Map crypto portfolio
    const cryptosPurchased = activeUser.portfolio.map ((crypto) => { 

        const formatPurchasePrice = parseFloat(crypto.coin.priceUsd).toFixed(2); // format purchase price to two decimal places
        const purchasePrice = parseFloat(formatPurchasePrice).toLocaleString("en-US"); // Separate large numbers with commas

        return (
        <>
        <br />• {crypto.coin.name} ({crypto.coin.symbol}) - ${crypto.investment}
        <br /><em>Bought at ${purchasePrice}</em>
        </>
        )
    });

    // map investment portfolio
    let investmentPortfolio;
    let investmentCalculation = 0;
    if (investmentValue) { // check to see investments exist

    investmentPortfolio = investmentValue.map( crypto => {

        investmentCalculation+=crypto.sell_price;

        const formatSellPrice = parseFloat(crypto.sell_price).toFixed(2); // format sell price to two decimal places
        const sellPrice = parseFloat(formatSellPrice).toLocaleString("en-US"); // Separate large numbers with commas


        return (
            <>
                <br />• {crypto.coin} investment is now worth ${sellPrice}
            </>
            )        
    });

    }  

    const formatInvestmentTotalValue = parseFloat(investmentCalculation).toFixed(2); // format sell price to two decimal places
    const investmentTotalValue = parseFloat(formatInvestmentTotalValue).toLocaleString("en-US"); // Separate large numbers with commas

    const workingBalance = parseFloat(activeUser.cash) + parseFloat(investmentCalculation); // Calculate total value of portfolio
    const formatWorkingBalance = parseFloat(workingBalance).toFixed(2); // format sell price to two decimal places
    const equityBalance = parseFloat(formatWorkingBalance).toLocaleString("en-US"); // Separate large numbers with commas


    return (

        <section id="user-stats" class="three">
        <div className="container">

            <header>
                <h2>User Stats</h2>
            </header>

            <div id="user-stats-box">
                <div className="left">
                    <p>Initial Investment: $10,000</p>
                    <p>Number of Investments: {numberOfInvestments}</p>
                    <p>Cryptos Purchased: {cryptosPurchased}</p>
                </div>
                <div className="right">
                <p>Equity Balance: ${equityBalance}
                <br /><em>Cash Balance: ${activeBalance}</em>
                <br /><em>Crypto Balance: ${investmentTotalValue}</em>
                </p>
                <p>Crypto Value: {investmentPortfolio}</p>

                </div>
            </div>


        </div>
    </section>


    )
}
export default UserStats