
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./view/home/home"
import Contact from "./view/contact/contact"
import About from "./view/about/about"

const root = ReactDOM.createRoot(document.getElementById('root'));
 
const router= createBrowserRouter([
      {
            path:'/',
            element:<Home/>
      },
      {
            path:'/about',
            element:<About/>
      },
      {
            path:'/contact',
            element:<Contact/>
      }
    ])
root.render(
      <>
      <RouterProvider router={router}/>
      </>
);

