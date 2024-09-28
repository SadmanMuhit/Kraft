import React from 'react'
import Home from './Page/Home'
import About from './Page/About'
import Blog from './Page/Blog'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import "./index.css";
import Layout from './component/Layout/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>      
        <Route path='/blog' element={<Blog />}></Route>      
     </Route> 
    )
  )
return (
  <RouterProvider router={router}></RouterProvider>
  )
}

export default App
