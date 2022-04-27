import react from "react";

const Intro = () => {

    return  (
        <section id="top" class="one dark cover">
            <div className="container">

                <header>
                    <div></div>
                    <div class="target-image"><img src={require("../images/target2.png")} height="400px"></img></div>
                    <h2 class="h2">Are You an Expert Trader? </h2>
                    <p>Test your investment skills against friends, family and fellow investors, <br />
                        in the ultimate crypto trading game!</p>
                </header>

                <footer>
                    <a href="#portfolio" class="button scrolly">START NOW</a>
                </footer>

            </div>
        </section>
    )
}

export default Intro; 
