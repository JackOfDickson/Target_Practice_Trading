import Stock from "./Stock"

const StocksList = ({cryptos, addCrypto}) => {

    const cryptoList = cryptos.map(coin=>
        { 
            
            return (
                <Stock coin={coin} key={coin.id} addCrypto={addCrypto}/>
        )})

    return (
        <div>
            {cryptoList}
        </div>
    )
}
export default StocksList