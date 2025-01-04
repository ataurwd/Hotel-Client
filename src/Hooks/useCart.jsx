import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useCart = () => {
    const [cart, setCart] = useState([]);
    // Fetching data from an API
    useEffect(() => {
      axios.get("http://localhost:4000/carts").then((res) => {
        setCart(res.data);
      });
    }, []);
    return [cart]
};

export default useCart;