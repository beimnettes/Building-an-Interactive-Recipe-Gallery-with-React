import React, { useState } from 'react';
import { images } from './imageList';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#ffe4e1', fontFamily: 'cursive' }}>
      <h2 style={{ color: '#d63384', fontSize: '28px' }}>💖 Recipe Gallery 💖</h2>
      
      <div style={{ border: '5px solid #ff69b4', borderRadius: '15px', display: 'inline-block', padding: '10px', backgroundColor: '#fff' }}>
        <img 
          src={images[currentIndex].url} 
          alt={images[currentIndex].description} 
          style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
        />
      </div>
      
      <p style={{ color: '#ff1493', fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>{images[currentIndex].description}</p>
      
      <div style={{ marginTop: '10px' }}>
        <button 
          onClick={prevImage} 
          disabled={currentIndex === 0} 
          style={{ 
            backgroundColor: currentIndex === 0 ? '#f8a5c2' : '#ff69b4', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            margin: '5px', 
            fontSize: '16px', 
            borderRadius: '20px', 
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          ◀ Previous
        </button>
        
        <button 
          onClick={nextImage} 
          disabled={currentIndex === images.length - 1} 
          style={{ 
            backgroundColor: currentIndex === images.length - 1 ? '#f8a5c2' : '#ff69b4', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            margin: '5px', 
            fontSize: '16px', 
            borderRadius: '20px', 
            cursor: currentIndex === images.length - 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default Gallery;
