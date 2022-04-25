import Stock from "./Stock"
import MoversShakers from './MoversShakers'

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
                    <h2>Market</h2>
                </header>
	     	<MoversShakers cryptos={cryptos}/>

             <input onChange={handleSearch} type="search" id="search" name="search" placeholder="Search Cryptos" />

                <table>
                    {cryptoList}
                </table>
            </div>
		</section>
    )
}
export default StocksList;
