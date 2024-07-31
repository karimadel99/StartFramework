import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
  let routers= createBrowserRouter([
    {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>}]
    }
   
  ])

  return <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  
}

export default App
