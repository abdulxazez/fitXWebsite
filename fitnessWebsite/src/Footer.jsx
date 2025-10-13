import React from 'react'
import styled from 'styled-components'

const StyledA = styled.p`
color: white;

&:hover{
  color:yellow;
}
`
function Footer() {
  return (
    <> 
   <div className="row bg-dark col-12 pt-2" style={{ backgroundColor:"rgb(33, 37, 41)"}}>
    
      <div className=" col-md-6 col-lg-3 ps-5 pt-3 text-white bg-dark d-flex flex-column align-items-center" style={{}}>
        <h3>Contact Us</h3>
        <h6>Address:</h6>
        <p>Share Sabala, Riyadh, Saudi Arabia</p>
        <h6>Hotline: </h6>
        <a href="" className="" style={{color: "orange", textDecoration:"none"}}>0337-7577330</a>
        <br /><br />
        <h6>Email: </h6>
        <a href="" style={{color: "orange", textDecoration:"none"}}>fitXafitlife@gmail.com</a>
        
      </div>
    
      <div className="col col-12 col-md-6 col-lg-3 bg-dark ps-5 pt-3 d-flex flex-column align-items-center">
      <h3 style={{color:"white"}}>About Us</h3>
      <StyledA>Warranty Policy</StyledA>
      <StyledA>FAQs</StyledA>
      <StyledA>Supplements</StyledA>
      <StyledA>Clothing</StyledA>
      <StyledA>Shipping Policy</StyledA>
      <StyledA>Privacy Policy</StyledA>

      </div>
      <div className="col-12 col-md-6 col-lg-3 bg-dark ps-5 pt-3 d-flex flex-column align-items-center">
          <h3 style={{color:"white", paddingBottom:"10px"}}>More Information</h3>
          <StyledA>Account</StyledA>
          <StyledA>Wishlist</StyledA>
          <StyledA>Shopping Cart</StyledA>
          <StyledA>Checkout</StyledA>
      </div>
      <div className="col-12 col-md-6 col-lg-3 bg-dark ps-5 pt-3 d-flex flex-column align-items-center text-white">
        <h3 style={{color:'white'}}>Follow Us</h3>
        <div><i class="bi bi-facebook pe-2 ps-4" style={{color:"white", fontSize:"1.5rem"}}></i> 
        <i class="bi bi-instagram ps-1 pe-2" style={{color:"white", fontSize:"1.5rem"}}></i>
        <i class="bi bi-youtube ps-1" style={{color:"white", fontSize:"1.5rem"}}></i></div> 
        <div style={{paddingLeft:"100px", paddingTop:"80px", fontSize:"1.5rem"}}>
          <h3>Payments</h3>
          <i class="bi bi-credit-card ps-5 ps-md-3"></i>
          <i class="bi bi-paypal ps-2"></i>
          <i class="bi bi-stripe ps-2"></i>
        </div>
        
        
</div>
</div>
      <hr style={{ borderColor: "white", border: "1px solid white"}}/>
      <div className='d-flex  align-items-center justify-content-center'>
        <h6  style={{color: "white"}}>F i t X : Copyright 2025</h6>
      </div>
      
      
      </>
    

  )
}

export default Footer