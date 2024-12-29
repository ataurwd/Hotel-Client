import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../Layout/Layout';

const Route = () => {
    const route = new createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={route}/>
    );
};

export default Route;