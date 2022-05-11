import { useState, useEffect } from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Next
import Link from "next/link";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle(!toggle);
  }

  function closeNav() {
    if (toggle) {
      setToggle(false);
    }
  }

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function enableScrolling() {
    window.onscroll = function () {};
  }

  function openModal() {
    closeNav();
    document.querySelector(".modal__overlay").classList.add("active");
  }

  useEffect(() => {
    if (toggle) {
      document.querySelector("body").classList.add("disable-scroll--mobile");
      disableScrolling();
    } else {
      document.querySelector("body").classList.remove("disable-scroll--mobile");
      enableScrolling();
    }
  });

  return (
    <header className="header">
      <Container>
        <Row className="header__content">
          <Col xs="6" md="3">
            <div className="header__logo">
              <Link href="/" scroll={true}>
                <a className="header__logo-img" onClick={closeNav}>
                  <img src="images/logo.png" alt="logo" />
                </a>
              </Link>
            </div>
          </Col>
          <Col md="6" className={`nav-primary ${toggle ? "active" : ""}`}>
            <Container className="">
              <ul>
                <li className="nav-primary__link">
                  <Link href="/" scroll={true}>
                    <a onClick={closeNav}>About Us</a>
                  </Link>
                </li>
                <li className="nav-primary__link">
                  <Link href="/services" scroll={true}>
                    <a onClick={closeNav}>Services</a>
                  </Link>
                </li>
                <li className="nav-primary__link">
                  <Link href="/education" scroll={true}>
                    <a onClick={closeNav}>Gallery</a>
                  </Link>
                </li>
                <li className="nav-primary__link">
                  <Link href="/contact-us" scroll={true}>
                    <a onClick={closeNav}>Contact</a>
                  </Link>
                </li>
                <li className="d-none d-md-block">
                  <button className="btn btn-primary" onClick={openModal}>
                    Call 01230 223409
                  </button>
                </li>
              </ul>
            </Container>
          </Col>
          <Col xs="6" md="3" className="nav-toggle d-md-none">
            <div
              className={`nav-toggle__btn ${toggle ? "active" : ""}`}
              onClick={toggleNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navigation;
