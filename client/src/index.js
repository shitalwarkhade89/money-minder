import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Singup from './components/Singup/Singup'
import Login from './components/Login/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
{
    path:'/',
    element:<Home/>
},
{
    path:'/singup',
    element:<Singup/>

},
{
    path:'/login',
    element:<Login/>

}
])

root.render(<RouterProvider router={router}/>

  
);


