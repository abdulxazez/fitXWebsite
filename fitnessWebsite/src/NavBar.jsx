import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FitLogo from './assets/FitLogo.jpg';


const StyledA = styled.a`
  text-decoration: none;
  margin: 0.5rem;
  color: white;
  font-size: 1.1rem;
  display: inline-block;

  &:hover {
    color: yellow;
  }
`;

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark w-100"
      style={{
        minHeight: "14vh",
        padding: "0.8rem 1.5rem",
      }}
    >
      <div className="container-fluid">
        {/* LOGO + BRAND */}
        <div className="d-flex align-items-center">
          <img
            src={FitLogo}
            alt="FitX Logo"
            style={{ height: "3rem", width: "auto" }}
          />
          <a
            className="navbar-brand ms-2"
            href="#"
            style={{
              color: "white",
              fontSize: "1.4rem",
              whiteSpace: "nowrap",
            }}
          >
            Fit <strong>X:</strong> A Fit Life
          </a>
        </div>

        {/* TOGGLER FOR SMALL SCREENS */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSIBLE SECTION */}
        <div
          className="collapse navbar-collapse justify-content-between align-items-center mt-3 mt-lg-0"
          id="navbarNav"
        >
          {/* LEFT LINKS */}
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <StyledA href="#">Home</StyledA>
            </li>
            <li className="nav-item">
              <StyledA href="#">Shop Now</StyledA>
            </li>
            <li className="nav-item">
              <StyledA href="#">About Us</StyledA>
            </li>
            <li className="nav-item">
              <StyledA href="#">Supplements</StyledA>
            </li>
            <li className="nav-item">
              <StyledA href="#">Clothing</StyledA>
            </li>
          </ul>

          {/* RIGHT SIDE: SEARCH + ICONS */}
          <form
            className="d-flex flex-wrap justify-content-center align-items-center mt-3 mt-lg-0"
            style={{ gap: "0.5rem" }}
          >
            <div className="d-flex" style={{ flexWrap: "nowrap" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  width: "160px",
                  minWidth: "100px",
                }}
              />
              <button
                type="submit"
                className="btn"
                style={{
                  border: "1px solid black",
                  backgroundColor: "rgb(255, 102, 0)",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  padding: "0 10px",
                }}
              >
                <i
                  className="bi bi-search text-white"
                  style={{ fontSize: "1.1rem" }}
                ></i>
              </button>
            </div>

            {/* ICONS */}
            <div className="d-flex justify-content-center mt-2 mt-lg-0">
              <StyledA href="#">
                <i className="bi bi-person ms-2" style={{ fontSize: "1.8rem" }}></i>
              </StyledA>
              <StyledA href="#">
                <i className="bi bi-bag ms-2" style={{ fontSize: "1.7rem" }}></i>
              </StyledA>
              <StyledA href="#">
                <i className="bi bi-heart ms-2 me-2" style={{ fontSize: "1.7rem" }}></i>
              </StyledA>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
