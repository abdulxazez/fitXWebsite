import React from 'react'
import pageCover from './assets/pageCover.png'
import fitLogo from './assets/FitLogo.jpg'

function ShopNow() {
  return (
    <>
    <div className='d-md-flex' style={{height:""}}>
      <div className="bg-black col-12 col-md-6  d-flex flex-column justify-content-center ps-2 ps-lg-5 pt-5 " style={{ backgroundColor:"black",}}>
        <h1 className='ps-5' style={{color:"white", fontSize:"3.5rem"}}>Why Fat, When <br /> there's Fit</h1>
                    <h5 className="pt-2 ps-5 " style={{color:"white", fontFamily:"Times New Roman"}}>Shop Now so you can move from Fat to Fit</h5>
                    <a className="pt-3 ms-5 mb-5" href=""  style={{width:"78px",textDecoration:"none", borderBottom: "2px solid yellow", color:"yellow", fontWeight:"bolder" }}>Shop Now</a>
                    
    </div>
    <div className='col-md-6 bg-black h-md-70 d-flex justify-content-evenly flex-row align-items-center p-relative  h-md-100 pt-5 pb-5' style={{backgroundColor:"tomato"}}> 
        <img className="" style={{height:"60%", width:"35%"}} src={pageCover} alt="" />
        <img src={fitLogo} className='p-absolute ' alt="" style={{height:"30%", width:"20%", top:"50%"}}/>
    </div>
    </div>
    </>
  )
}

export default ShopNow;