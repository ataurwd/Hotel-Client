import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cart from './dashboard/Cart';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-80 bg-yellow-400 min-h-screen'>
            <Link to={'/dashboard/cart'}>Cart</Link>
            </div>
            <div className='flex-1'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;