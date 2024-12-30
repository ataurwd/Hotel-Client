import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../Layout/Layout';
import Menu from './../pages/Menu';

const Route = () => {
    const route = new createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/menu',
                    element: <Menu/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={route}/>
    );
};

export default Route;