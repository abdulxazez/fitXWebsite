import React from 'react';
import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FitLogo from './assets/FitLogo.jpg'
import cart from './assets/cart.png'

const StyledA = styled.a`
  text-decoration: none;
  margin: 0.5rem;
  color: white;

  &:hover{
    color: yellow
  }
`;
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-12" style={{height:"15vh"}}>
      <div className="container-fluid">
        <img className="nav-img " src={FitLogo} alt="" style={{height:"3rem"}}/>
        <a className="navbar-brand ms-2" href="#" style={{color: "white", fontSize:"1.5rem"}}>
          Fit <strong>X:</strong> A Fit Life
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse    " id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ms-5">
              <StyledA  href="#">Home</StyledA>
            </li>
            <li className="nav-item">
              <StyledA href="#">Accessories</StyledA>
            </li>
            <li className="nav-item">
              <StyledA href="#">Clothing</StyledA>
            </li>
            <li className="nav-item">
              <StyledA href="#">Supplements</StyledA>
            </li>
            <li className="nav-item">
              <StyledA href="#">DietAI</StyledA>
            </li>
          </ul>
          
          <form className="d-flex " style={{position: "relative"}}>
            <input 
              className="form-control rounded-0" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
            />
            <a className="me-3 rouded-0 "  type="submit" style={{border:"1px solid black", width:"25%",  backgroundColor:"rgb(255, 102, 0)"}}>
              <i class="bi bi-search ms-2" style={{fontSize:"1.8rem", }} ></i>
            </a>
            <StyledA href="#" ><i class="bi bi-bag me-3" style={{fontSize:"1.8rem"}}></i></StyledA>
            <StyledA href=""><i class="bi bi-heart me-5" style={{fontSize:"1.8rem"}}></i></StyledA>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;