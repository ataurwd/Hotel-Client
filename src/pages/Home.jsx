import React from 'react';
import Slider from '../components/Slider';
import CategorySlider from '../components/CategorySlider';
import BistroBoss from '../components/BistroBoss';

const Home = () => {
    return (
        <div>
            <Slider />
            <CategorySlider />
            <BistroBoss/>
        </div>
    );
};

export default Home;