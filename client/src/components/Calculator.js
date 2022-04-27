

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

export const LBC = ((user, cryptos)=>
{
    if (user.portfolio.length === 0 || cryptos.length === 0)
    {
        return {name: user.name, equity: user.cash};
    }
    let userTotal = user.cash
    const sellPricesLive = user.portfolio.map((crypto)=>
    {
        const currentCrypto = cryptos.find(cry => cry.name === crypto.coin.name)
        
        userTotal += Number(currentCrypto.priceUsd)*Number(crypto.coin_amount)
        
        
    })
    return {name: user.name, equity: userTotal};
})