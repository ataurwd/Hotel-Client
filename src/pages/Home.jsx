import React from 'react';
import Slider from '../components/Slider';
import CategorySlider from '../components/CategorySlider';
import BistroBoss from '../components/BistroBoss';
import PopularMenu from '../components/PopularMenu';
import ChefRecommend from '../components/ChefRecommend';

const Home = () => {
    return (
        <div>
            <Slider />
            <CategorySlider />
            <BistroBoss />
            <PopularMenu />
            <ChefRecommend/>
        </div>
    );
};

export default Home;