import Stock from "./Stock"

const StocksList = ({cryptos, addCrypto, cash}) => {

    const cryptoList = cryptos.map(coin=>
        { 
            
            return (
                <Stock coin={coin} key={coin.id} addCrypto={addCrypto} cashWallet={cash}/>
        )})

    return (
        <section id="market" class="five">
            <div class="container">

                <header>
                    <h2>Market</h2>
                </header>
	     	<MoversShakers cryptos={cryptos}/>
                <table>
                    {cryptoList}
                </table>
            </div>
		</section>
    )
}
export default StocksList;
