

export const calculateIncrease = ((portfolio, cryptos)=>
{
    if (portfolio.length === 0)
    {
        return false;
    }
    const sellPricesLive = portfolio.map((crypto)=>
    {
        const currentCrypto = cryptos.find(cry => cry.name === crypto.coin.name)
        return (
            {coin: crypto.coin.name, sell_price: Number(currentCrypto.priceUsd)*Number(crypto.coin_amount)}
        )
        
    })
    return sellPricesLive;
})