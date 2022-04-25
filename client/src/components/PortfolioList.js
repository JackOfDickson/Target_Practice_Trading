import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioCharts from "./PortfolioCharts";

const PortfolioList = ({portfolio, sellCrypto, investmentValue, cash})=>
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
        <div className="portfolio-box">{portfolioNodes}</div>
        {/* <PortfolioCharts portfolio={portfolio} cash={cash}/> */}
        
        </div>
        </section>
        
    )
}

export default PortfolioList








