import React from 'react';
import './Gallery.css';
import jcb1 from '../images/jcb1.jpg'
// import jcb2 from 'assets/jcb2.jpg'
import jcb3 from '../images/jcb3.jpg'
import jcb4 from '../images/jcb4.jpg'
import jcb5 from '../images/jcb5.jpg'
import jcb6 from '../images/jcb6.jpg'
import jcb7 from '../images/jcb7.jpeg'

const Gallery = () => {
    const images = [
        jcb1,
        jcb3,
        jcb5,
        jcb4,
        jcb6,
        jcb7
    ]

    // const imageWidth = 200;
    // const imageHeight = 200;
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image} alt={`Gallery Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
