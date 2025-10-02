import React from 'react'
import styled from 'styled-components'

const StyledA = styled.a`
    color: black;
      &:hover{
      color: white;
      }
    `
function Registeration() {
  return (
    <>
    <div>
        <div className="container-fluid col-9  d-flex flex-column justify-content-center bg-primary align-items-center " style={{height:"75vh", marginTop:"50px"}}>
      <form action="">
      <h1 className='mb-5 ' style={{fontWeight:"bolder"}}>Register with <strong>Fit X</strong></h1>
      <span style={{paddingRight:"20px", paddingBottom:"", fontSize:'18.4px', color:"white"}}>First Name</span>
      <input type="text" className='rounded-3' placeholder="First Name" style={{border:"grey", marginBottom:"20px", }}/>
      <br />
      <span style={{paddingRight:"20px", paddingBottom:"", fontSize:'18.4px', color:"white"}}>Last Name</span>
      <input type="text" className='rounded-3' placeholder="LastName" style={{border:"grey", marginBottom:"20px", }}/>
      <br />
        <span style={{paddingRight:"20px", paddingBottom:"", fontSize:'18.4px', color:"white"}}>Set Username</span>
        <input type="text" className='rounded-3' placeholder="Enter Username" style={{border:"grey", marginBottom:"20px", }}/>
        <br />
        <span style={{paddingRight:"20px",  fontSize:'20px', color:"white"}}>Set Password</span>
        <input type="password" className='rounded-3 mb-1' placeholder="Enter Password" style={{border:"grey"}}/>
        <br />
        <span style={{paddingRight:"20px",  fontSize:'20px', color:"white"}}>Enter Email</span>
        <input type="text" className='rounded-3 mt-3' placeholder="Enter Email" style={{border:"grey", marginBottom:"20px", }}/>
        <br />

        <button className='btn btn-outline-light mt-3 me-0' style={{width:"290px", marginBottom:"25px"}}>Register</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Registeration