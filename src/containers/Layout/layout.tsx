import React, { ReactNode, useState } from "react";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";

import backgroundImage from "../../assets/bg-img-c.webp";

import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setSearchValue } from "../../features/search/searchSlice";
import store from "../../app/store";
import {
  faUser,
  faShoppingCart,
  faSearch,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();
  const { pathname } = window.location;
  const hideElement = pathname.includes("/product-details");
  const cart = useSelector((state: RootState) => state.cart);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/Dealdash/">
            <FontAwesomeIcon icon={faTruckFast} className="me-1" />{" "}
            <strong>DealDash</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {!hideElement && (
            <>
              <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                <div className="input-group">
                  <span className="border-warning input-group-text bg-warning text-white">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input
                    type="text"
                    className="form-control border-warning"
                    style={{ color: "#7a7a7a" }}
                    value={searchValue}
                    onChange={handleSearchInputChange}
                  />
                  <button className="btn btn-warning text-white">Search</button>
                </div>
              </div>
            </>
          )}

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            {!hideElement && (
              <>
                <div className="ms-auto d-none d-lg-block">
                  <div className="input-group">
                    <span className="border-warning input-group-text bg-warning text-white">
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input
                      type="text"
                      className="form-control border-warning"
                      style={{ color: "#7a7a7a" }}
                      value={searchValue}
                      onChange={handleSearchInputChange}
                    />
                    <button className="btn btn-warning text-white">
                      Search
                    </button>
                  </div>
                </div>
              </>
            )}

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 text-uppercase "
                  aria-current="page"
                  href="#"
                >
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase active" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  About
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <div className="cart-details">
                        {cart.map((item: any) => (
                          <div key={item.id}>
                            <div>{item.title}</div>
                          </div>
                        ))}
                      </div>
                    </Tooltip>
                  }
                >
                  <a className="nav-link mx-2 text-uppercase" href="#">
                    <FontAwesomeIcon icon={faShoppingCart} className="me-1" />{" "}
                    Cart <span className="cart-count">({cart.length})</span>
                  </a>
                </OverlayTrigger>
              </li>

              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <FontAwesomeIcon icon={faUser} className="me-1" /> Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="background-image "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Container className="fullscreen-content p-0">{children}</Container>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
interface RootState {
  cart: any;
  search: {
    value: string;
  };
}
