import React from "react";
import "../styles/modules/Header.scss"
import logo from "../image/Piggyvest-logo.svg"

const Header = () =>{
    return(
 <header>
  <img src={logo} alt="logo"/>
<div>
<a href="#">Save</a>
  <a  href="#">Invest</a>
  <a  href="#">Stories</a>
  <a  href="#">FAQs</a>
  <a  href="#">Login</a>
</div>
 <button>Create A Free Account</button>
 </header>
    )
}
export default Header