import React from "react";

import logo from "../image/Piggyvest-logo.svg"
import  "../styles/modules/header.module.scss"


const Header = () =>{
    return(
 <header>
  <img src={logo} alt="logo"/>
<span className="nav">
<a href="http://www.google.com">Save</a>
  <a  href="http://www.google.com">Invest</a>
  <a  href="http://www.google.com">Stories</a>
  <a  href="http://www.google.com">FAQs</a>
  <a  href="http://www.google.com">Login</a>
</span>
 <button className="btn">Create A Free Account</button>
 </header>
    )
}
export default Header