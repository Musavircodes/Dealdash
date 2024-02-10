import React from "react";

const Footer = () => {
  return (
    <div
      className="footer-container bg-dark text-light py-3"
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <div className=" d-flex justify-content-between align-items-center">
        <div className="footer-links d-flex d-flex justify-content-between align-items-center">
          <div className="footer-link-item px-2 hide-mobile">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
              alt="Become a Seller"
              width="13"
              height="12"
            />
            <a
              href="#"
              aria-label="Become a Seller"
              style={{ textDecoration: "none" }}
            >
              <span className="px-1 footer-text">Become a Seller</span>
            </a>
          </div>
          <div className="footer-link-item px-2 hide-mobile">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
              alt="Advertise"
              width="14"
              height="14"
            />
            <a
              href="#"
              aria-label="Advertise"
              style={{ textDecoration: "none" }}
            >
              <span className="px-1 footer-text">Advertise</span>
            </a>
          </div>
          <div className="footer-link-item px-2 hide-mobile">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
              alt="Gift Cards"
              width="13"
              height="13"
            />
            <a
              href="#"
              aria-label="Gift Cards"
              style={{ textDecoration: "none" }}
            >
              <span className="px-1 footer-text">Gift Cards</span>
            </a>
          </div>
          <div className="footer-link-item px-2">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
              alt="Help Center"
              width="13"
              height="13"
            />
            <a
              href="#"
              aria-label="Help Center"
              style={{ textDecoration: "none" }}
            >
              <span className="px-1 footer-text ">Help Center</span>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          © 2001-2024 <span>DealDash.com</span>
        </div>
        <img
          className="footer-payment-methods hide-mobile"
          style={{ paddingRight: "10px" }}
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
          alt="Payment methods"
        />
      </div>
    </div>
  );
};

export default Footer;
