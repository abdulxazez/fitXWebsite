import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'

const StyledA = styled.a`
    color: black;
      &:hover{
      color: black;
      }
    `
function Registeration() {

   const [submitted, setSubmitted] = useState(false);
   
   const handleSubmit = () => {
      setSubmitted(true)
   }


  return (
    <>
    <div style={{backgroundColor: "white  "}}>
        <div className="container-fluid col-9  d-flex flex-column justify-content-center align-items-center " style={{height:"75vh", marginTop:"50px", backgroundColor: "rgb(255, 255, 237)"}}>
      {!submitted ? 
      <form onSubmit={handleSubmit}>
      <h1 className='mb-5 ' style={{fontWeight:"bolder"}}>Register with <strong>Fit X</strong></h1>
      <span style={{paddingRight:"20px", paddingBottom:"", fontSize:'18.4px', color:"black"}}>First Name</span>
      <input type="text" className='rounded-3' placeholder="First Name" style={{border:"grey", marginBottom:"20px", }}/>
      <br />
      <span style={{paddingRight:"20px", paddingBottom:"", fontSize:'18.4px', color:"black"}}>Last Name</span>
      <input type="text" className='rounded-3' placeholder="LastName" style={{border:"grey", marginBottom:"20px", }}/>
      <br />
        <span style={{paddingRight:"20px", paddingBottom:"", fontSize:'18.4px', color:"black"}}>Set Username</span>
        <input type="text" className='rounded-3' placeholder="Enter Username" style={{border:"grey", marginBottom:"20px", }}/>
        <br />
        <span style={{paddingRight:"20px",  fontSize:'20px', color:"black"}}>Set Password</span>
        <input type="password" className='rounded-3 mb-1' placeholder="Enter Password" style={{border:"grey"}}/>
        <br />
        <span style={{paddingRight:"20px",  fontSize:'20px', color:"black"}}>Enter Email</span>
        <input type="text" className='rounded-3 mt-3' placeholder="Enter Email" style={{border:"grey", marginBottom:"20px", }}/>
        <br />

        <button className='btn btn-outline-dark mt-3 me-0' style={{width:"290px", marginBottom:"25px", color: "black", fontWeight: "bolder", fontSize: "25px"}}>Register</button>
        </form>
        :
          <div>
            <h1>Registering... <div class="spinner-border" role="status"></div></h1>
            
          </div>
        }
         </div>
    </div>
    </>
  )
}

export default Registeration