import React from 'react';
import NavGlobalLocationSlot from './NavGlobalLocationSlot';
import NavSprite from './NavSprite';

const Navbar = () => {
  return (
    <React.Fragment>
    <div className="amazon-navbar">
      <div className="amazon-navbar-logo">
        <img src="./img/amazon_logo.png" alt="Amazon Logo" />
      </div>
      <NavGlobalLocationSlot/>
      <div className="amazon-navbar-search">
        <input type="text" className="amazon-navbar-search-input" placeholder="Search" />
        <button className="amazon-navbar-search-button">Search</button>
      </div>
      <div className="amazon-navbar-nav">
        <div className="amazon-navbar-option">
          <span className="amazon-navbar-option-line-one">Hello, Sign in</span>
          <span className="amazon-navbar-option-line-two">Account & Lists</span>
        </div>
        <div className="amazon-navbar-option">
          <span className="amazon-navbar-option-line-one">Returns</span>
          <span className="amazon-navbar-option-line-two">& Orders</span>
        </div>
        <div className="amazon-navbar-option">
          <span className="amazon-navbar-option-line-one">Cart</span>
          <span className="amazon-navbar-option-line-two">0</span>
        </div>
      </div>
    </div>
    <div>
      <NavSprite/>
    </div>
    </React.Fragment>
  );
};

export default Navbar;