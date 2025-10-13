import {createBrowserRouter} from "react-router-dom"
import Cart from "./Cart"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import LoginPage from "./LoginPage"
import Registeration from "./Registeration"
import Home from "./Home"

const router = createBrowserRouter([
    {path:"/", element: <Home/>},
    {path:"/Cart", element: <Cart/>},
    {path:"/ContactUs", element: <ContactUs/>},
    {path:"/AboutUs", element: <AboutUs/>},
    {path:"/    ", element: <LoginPage/>}, 
    {path:"/", element: <Registeration/>}
])

export default router