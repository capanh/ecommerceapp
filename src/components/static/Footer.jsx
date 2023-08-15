import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/orders">Order Status</a>
            </li>
            <li>
              <a href="/returns">Returns & Exchanges</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="/allProducts">All Products</a>
            </li>
            <li>
              <a href="/bestSellers">Best Sellers</a>
            </li>
            <li>
              <a href="/deals">Deals</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="/about">About Amazon</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/press">Press Releases</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p> <p>Copyright ⓒ {currentYear}</p></p>
      </div>
    </footer>
  );
}

export default Footer;
