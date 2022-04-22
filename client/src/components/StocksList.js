import Stock from "./Stock"

const StocksList = ({cryptos, addCrypto, cash}) => {

    const cryptoList = cryptos.map(coin=>
        { 
            
            return (
                <Stock coin={coin} key={coin.id} addCrypto={addCrypto} cashWallet={cash}/>
        )})

    return (
        <div>
            {cryptoList}
        </div>
    )
}
export default StocksList