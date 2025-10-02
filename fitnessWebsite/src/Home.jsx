import React from 'react'
import NavBar from './NavBar'
import ShopNow from './ShopNow'
import Featured from './Featured'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

export default function Home() {
  return (
    <>
      
        <div className=''>
          <NavBar/>  
        </div>
         <div>
          {/* <ShopNow /> */}
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <ContactUs />
        </div>
        
       
       
    </>
  )
}
