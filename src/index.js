import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Add from "./pages/add";
import Gig from "./pages/gig";
import Gigs from "./pages/gigs";
import Login from "./pages/login";
import Message from "./pages/message";
import Messages from "./pages/messages";
import MyGigs from "./pages/myGigs";
import Orders from "./pages/orders";
import Register from "./pages/register";


const Layout = ()=>{
  return(<div >
    <NavBar/>
    <Outlet/>
    <Footer/>
  </div>);
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children :[
      {
        path:'/',
        element :<Home/>
      },
      {
        path:'/add',
        element :<Add/>
      },
      {
        path:'/gig:id',
        element :<Gig/>
      },
      {
        path:'/gigs',
        element :<Gigs/>
      },
      {
        path:'/login',
        element :<Login/>
      },
      {
        path:'/message:id',
        element :<Message/>
      },
      {
        path:'/messages',
        element :<Messages/>
      },
      {
        path:'/myGigs',
        element :<MyGigs/>
      },
      {
        path:'/orders',
        element :<Orders/>
      },
      {
        path:'/register',
        element :<Register/>
      },
      
      
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
