import React from "react";
import Login from "../forms/Login";
import Register from "../forms/Register";
import Home from "../pages/Home";

export let Enrutador = [
    {
        path:'/',
        element: <Login/>
    },
    {
        path:'/register',
        element: <Register/>
    },
    {
        path:'/home',
        element: <Home/>
    }
];