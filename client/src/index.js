import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Singup from './views/Singup/Singup'
import MyTransactions from './views/MyTransactions/MyTransactions';
import AddTransaction from './views/AddTransaction/AddTransaction';
import UpdateTransaction from './views/UpdateTransaction/UpdateTransaction';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
{
    path:'/',
    element:<Home/>
},
{
    path:"/mytransactions",
    element:<MyTransactions/>
},
{
    path:"/addtransactions",
    element:<AddTransaction/>
},
{
    path:'/signup',
    element:<Singup/>

},
{
    path:'/login',
    element:<Login/>

},
{
    path:'/update/:id',
    element:<UpdateTransaction/>

}
])

root.render(<RouterProvider router={router}/>

  
);


