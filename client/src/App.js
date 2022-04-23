import react from "react"
import StocksBox from "./containers/StocksBox";
import Intro from "./designComponents/Intro";
import Header from "./designComponents/Header";
import Footer from "./designComponents/Footer"
import HowToPlay from "./designComponents/HowToPlay";

function App() {
  return (
  
	<>
	<Header />
    <div id="main">
      <Intro/>
      <HowToPlay />
      <StocksBox/>
    </div>
	<Footer />
    </>
  );
}

export default App;
