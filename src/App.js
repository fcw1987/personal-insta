import React, { useState } from 'react';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import QuoteCard from './QuoteCard';
import './App.css'; 

const App = () => {
  const [modalImage, setModalImage] = useState(null);

  const imageNames = [
    'image1.JPG', 'image2.JPG', 'image3.JPG',
    'image4.JPG', 'image5.JPG', 'image6.JPG',
    'image7.JPG'
  ];

  const handleImageClick = (src) => {
    setModalImage(src);
  };

  return (
    <div className="App">
      <QuoteCard
        quote="The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with Hope, you will fill yourself with Hope."
        attribution="— Barack Obama"
      />
      <div className="grid-container">
        {imageNames.map((imageName, index) => (
          <ImageCard
            key={index}
            imageSrc={`${process.env.PUBLIC_URL}/${imageName}`}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
};

export default App;
