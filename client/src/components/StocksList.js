import Stock from "./Stock"
import MoversShakers from './MoversShakers'
import Analysis from "./analysis"

const StocksList = ({cryptos, addCrypto, cash, searchCryptos, searchTerm}) => {

        // function to reduce the cryptos displayed if search box has text
        if (searchTerm != '') {
            cryptos = cryptos.filter(crypto => 
                (crypto.name.toLowerCase()).includes(searchTerm.toLowerCase()) )
        }

    const cryptoList = cryptos.map(coin=>
        { 
            return (
                <Stock coin={coin} key={coin.id} addCrypto={addCrypto} cashWallet={cash}/>
        )})

        const handleSearch = (event) => {
            searchCryptos(event.target.value);
        };

    return (
        <section id="market" class="five">
            <div class="container">

                <header>
                    <h2>Cryptocurrency Market <i class="fa-brands fa-bitcoin"></i></h2>
                </header>
            <p>Check out the latest price of the top 100 cryptocurrencies and add them to your portfolio.</p>

            
	     	<MoversShakers cryptos={cryptos}/>

            <Analysis />

             <h3 >Cryptocurrencies <i class="fa-solid fa-list"></i></h3>

             <p>A list of the top 100 cryptocurrencies available for purchase. Please use the search box below to filter results.</p>

             <input onChange={handleSearch} type="search" id="search" name="search" placeholder="Search Cryptos" class="market-submit"/>
            <p></p>
                <table>
                    {cryptoList}
                </table>
            </div>
		</section>
    )
}
export default StocksList;
