import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)

    // Fetching data from an API
    useEffect(() => {
      axios.get("http://localhost:4000/resturent").then((res) => {
          setMenu(res.data);
        setLoading(false)
      });
    }, []);
    return [menu, loading]
};

export default useMenu;