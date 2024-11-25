import React from 'react';
import './Home.css';
import leftImage from 'assets/home1.jpeg'; // Replace with your actual image path
import rightImage from 'assets/home2.jpg'; // Replace with your actual image path

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Deena Earth Movers</h1>
      <div className="content-section">
        <div className="text-content">
          <p>
            At Deena Earth-Movers, we provide top-notch earth moving services
            with a commitment to quality and customer satisfaction. Our team of
            experts is equipped with the latest machinery to handle any project,
            big or small.
          </p>
            <div className="image-content">
            <img src={leftImage} alt="Earth Mover Left" className="left-image" />
            <img src={rightImage} alt="Earth Mover Right" className="right-image" />
          </div>
          <p>
            Contact us today to learn more about our services and how we can
            assist you with your earth moving needs.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
