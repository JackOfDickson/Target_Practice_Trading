import Stock from "./Stock"

const StocksList = ({cryptos, addCrypto, cash}) => {

    const cryptoList = cryptos.map(coin=>
        { 
            
            return (
                <Stock coin={coin} key={coin.id} addCrypto={addCrypto} cashWallet={cash}/>
        )})

    return (
        <section id="market" class="four">
        <div class="container">

            <header>
                <h2>Market</h2>
            </header>
            {cryptoList}
            </div>
		</section>
    )
}
export default StocksList