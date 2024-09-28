import Home from './Page/Home'
import About from './Page/About'
import Blog from './Page/Blog'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    }
  ])
return (
  <RouterProvider router={router}></RouterProvider>
  )
}

export default App
