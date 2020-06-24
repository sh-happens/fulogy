import React from "react";
import "../App.css";

import Logo from "../images/Logo.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Header = () => {
  return (
    <div className='headerContainer'>
      <img src={Logo} alt='Fulogy Logo' />
      <div>
        <ShoppingCartOutlinedIcon fontSize='large' className='shoppingCart' />
        <button>burger</button>
      </div>
    </div>
  );
};

export default Header;
