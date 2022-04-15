import React from "react";
import "../styles/modules/Header.scss"
import logo from "../image/Piggyvest-logo.svg"

const Header = () =>{
    return(
 <header>
  <img src={logo} alt="logo"/>
<div>
<a>Save</a>
  <a>Invest</a>
  <a>Stories</a>
  <a>FAQs</a>
  <a>Login</a>
</div>
 <button>Create A Free Account</button>
 </header>
    )
}
export default Header