import React from 'react'
import NavBar from './NavBar'
function ContactUs() {
  return (
    <>
        <div>
            {/* <NavBar /> */}
        </div>
        <div className='mt-4 d-md-flex'>
            <div className='col-12 ms-5 col-md-5'>
                <h1 className='mb-5'>Contact Us</h1>

                Name <br />
                <input className="mb-4 w-50" type="text"placeholder='Enter your Name' /> <br />
                Email Address <br />
                <input className="mb-4  w-50" type="text" placeholder='Enter your Email Address'/> <br />
                Subject <br />
                <input type="text " className="w-50 mb-4" placeholder='Enter your Subject'/> 
                <br />
                Enter your Message <br />
                <textarea className="w-50" rows={5} placeholder='Enter your message' id=""></textarea>

                <br />
                <button className='btn btn-outline-success rounded-1'>Submit</button>
            </div>
            <div className='col-12 col-md-5 ms-5 mt-5 mt-md-0'>
                    <h1 className='mb-5'>Get in Touch</h1>
                    <h4>The Office</h4>
                    
                    <p><i class="bi bi-geo-alt-fill"></i>  Shar e Sabala, Riyadh, Saudi Arabia</p>
                    <p><i class="bi bi-telephone"></i>  0337-7577330</p>
                    <p><i class="bi bi-envelope"></i>  fitxafitlife@gmail.com</p>

                    <h4>Business Hours</h4>
                    <p><i class="bi bi-clock"></i>  10:00 am - 06:00 pm (Mon to Sat)</p>

                    
            </div>
        </div>
    </>
  )
}

export default ContactUs