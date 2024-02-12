import React, { ReactNode, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

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
  faBagShopping,
  faHamburger,
  faBars,
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                {cart.length > 0 && (
                  <Dropdown>
                    <Dropdown.Toggle
                      className="nav-link mx-2 text-uppercase"
                      variant="link"
                      id="dropdown-basic"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className="me-1" />{" "}
                      Cart <span className="cart-count">({cart.length})</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {cart.map((item: any) => (
                        <>
                          <Dropdown.Item key={item.id}>
                            {item.title}
                          </Dropdown.Item>
                          <Dropdown.Divider />
                        </>
                      ))}
                      <Dropdown.Item style={{ fontWeight: "bold" }}>
                        Check-Out{" "}
                        <FontAwesomeIcon
                          icon={faBagShopping}
                          style={{ marginLeft: "2rem" }}
                        />{" "}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {cart.length === 0 && (
                  <a className="nav-link mx-2 text-uppercase" href="#">
                    <FontAwesomeIcon icon={faShoppingCart} className="me-1" />{" "}
                    Cart <span className="cart-count">(0)</span>
                  </a>
                )}
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
        className="d-flex justify-content-start align-items-center"
        style={{ height: "38px", backgroundColor: "#000", color: "#fff" }}
      >
        {!hideElement && (
          <>
            <FontAwesomeIcon
              onClick={handleShow}
              icon={faBars}
              className="mr-2"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
            <div style={{ fontSize: "1.3rem" }}>All</div>
          </>
        )}
        <div className="d-flex justify-content-start align-items-center">
          {" "}
          <p className="m-0" style={{ paddingLeft: "3rem" }}>
            Todays's Deals
          </p>
          <p className="m-0 p-3 hide-mobile">Customer Service</p>
          <p className="m-0 p-3 hide-mobile">Gift Cards</p>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header style={{ backgroundColor: "grey" }} closeButton>
            <Offcanvas.Title style={{ color: "#fff" }}>
              Hello, Sign-In
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Shop by Departments
                </div>
              </li>
              <li style={{ marginBottom: "5px" }}>
                <div>Smartphones</div>
              </li>
              <li style={{ marginBottom: "5px" }}>
                <div>Laptops</div>
              </li>{" "}
              <li style={{ marginBottom: "5px" }}>
                <div>Fragrances</div>
              </li>{" "}
              <li style={{ marginBottom: "5px" }}>
                <div>Skincare</div>
              </li>{" "}
              <li style={{ marginBottom: "5px" }}>
                <div>Groceries</div>
              </li>
              <li style={{ marginBottom: "5px" }}>
                <div>Home-Decoration</div>
              </li>
              <li
                style={{
                  marginTop: "20px",
                  borderTop: "1px solid #ccc",
                  paddingTop: "10px",
                }}
              >
                <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Help & Settings
                </div>
              </li>
              <li style={{ marginTop: "5px" }}>
                <a>Sign in</a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

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
