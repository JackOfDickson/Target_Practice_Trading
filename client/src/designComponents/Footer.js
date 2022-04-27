import react from "react";

const Footer = () => {

    return  (
        <>
{/* Footer  */}
<div id="footer">
<img src={require('../images/jackpot-slot.gif')} alt="Target Practice Training League" width="150"/>

{/* Copyright */}
<ul className="copyright">
   <li>&copy; <a href="https://github.com/stephaniepboyne">Stephanie</a>, <a href="https://github.com/JackOfDickson">Jack</a>, <a href="https://github.com/Matt-Matthaiou">Matt</a> & <a href="https://github.com/kevinmuldoon-github">Kevin</a></li>
</ul>


<ul className="icons">
                        <li><a href="https://github.com/stephaniepboyne" className="icon solid fa-face-grin-stars"><span className="label">Stephanie</span></a></li>
                        <li><a href="https://github.com/JackOfDickson" className="icon solid fa-face-grin-tongue-squint"><span className="label">Jack</span></a></li>
                        <li><a href="https://github.com/Matt-Matthaiou" className="icon solid fa-face-laugh-wink"><span className="label">Matt</span></a></li>
                        <li><a href="https://github.com/kevinmuldoon-github" className="icon solid fa-face-grin-tongue-wink"><span className="label">Kevin</span></a></li>
    </ul>

</div>
{/* End of Footer */}


{/* Scripts */}
		

            
</>
    )
}

export default Footer; 
