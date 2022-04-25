import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioList = ({portfolio, sellCrypto, investmentValue})=>
{
    const portfolioNodes = portfolio.map((coin, index) => {
        if (investmentValue)
        {
          
            const currentValue = investmentValue.find(cry=> cry.coin === coin.coin.name)
            if(currentValue){
                return (
                <PortfolioItem coin={coin} index={index} key={index} sellCrypto={sellCrypto} liveUpdate={currentValue.sell_price}/>
                )  }
            else{
               return ( <PortfolioItem coin={coin} index={index} key={index} sellCrypto={sellCrypto}/> )
                 }
        }
        
        else{
            return (
            <PortfolioItem coin={coin} index={index} key={index} sellCrypto={sellCrypto} />
        )
        }
    })


    return (
        
        <section id="portfolio" class="four">
        <div class="container">
            <header>
                <h2>Portfolio</h2>
            </header>
        {portfolioNodes}
        </div>
        </section>
        
    )
}

export default PortfolioList








