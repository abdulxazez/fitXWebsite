import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

    const StyledA1 = styled.a`
    color: white;
    &:hover{
      color: grey;
    }
    
    `
    const StyledButton = styled.button`
     background-color: ${(props) => (props.bgColor ? "blue" : "pink")};
    &:hover{
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    `
    const StyledA = styled.a`
    color: black;
      &:hover{
      color: white;
      }
    `
function LoginPage() {

  return (
    <>
    <div className="container-fluid col-9  d-flex flex-column justify-content-center bg-primary align-items-center " style={{height:"75vh"}}>
      <form action="">
      <h1 className='mb-5 ' style={{fontWeight:"bolder"}}>Log In to <strong>Fit X</strong></h1>
        <span style={{paddingRight:"20px", paddingBottom:"", fontSize:'18.4px', color:"white"}}>Username</span>
        <input type="text" className='rounded-3' placeholder="Enter Username" style={{border:"grey", marginBottom:"20px", }}/>
        <br />
        <span style={{paddingRight:"20px",  fontSize:'20px', color:"white"}}>Password</span>
        <input type="password" className='rounded-3 mb-1' placeholder="Enter Password" style={{border:"grey"}}/>
        <br />
        
        <StyledA className='mt-5 pe-4 pt-2' href="" style={{ textDecoration:"none", marginLeft:"160px", paddingTop:"50px"}}>Forgot Password?</StyledA>
        <br />
        <button className='btn btn-outline-light mt-3 me-0' style={{width:"290px", marginBottom:"25px"}}>Login</button>
        
      <br />

        <StyledA1 href="" className='pt-5' style={{textDecoration:"none", textAlign:"center"}}> <h3 style={{fontWeight:"bolder"}}>Register Now!</h3></StyledA1>
      </form>
    </div>
    </>
  )
}

export default LoginPage