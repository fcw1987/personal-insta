import React, { useState } from 'react';
import './ImageCard.css'; 

const ImageCard = ({ imageSrc, onImageClick }) => {
  const [likesCount, setLikesCount] = useState(0);

  const incrementLike = (e) => {
    e.stopPropagation(); // Prevent the click from also triggering the image click
    setLikesCount(likesCount + 1);
  };

  return (
    <div className="image-card" onClick={() => onImageClick(imageSrc)}>
      <img src={imageSrc} alt="Personal" className="image" />
      <div className="reaction" onClick={incrementLike}>
        ❤️ {likesCount}
      </div>
    </div>
  );
};

export default ImageCard;
