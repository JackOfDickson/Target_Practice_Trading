import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioCharts from "./PortfolioCharts";

const PortfolioList = ({portfolio, sellCrypto, investmentValue, cash})=>
{
    const portfolioNodes = portfolio.map((coin, index) => {
        if (investmentValue)
        {
          
            const currentValue = investmentValue[index]
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
            <h2 class="port-title">Portfolio <i class="fa-solid fa-th"></i></h2>
            </header>
        <div className="portfolio-box">{portfolioNodes}</div>
        <PortfolioCharts portfolio={portfolio} cash={cash}/>
        
        </div>
        </section>
        
    )
}

export default PortfolioList








