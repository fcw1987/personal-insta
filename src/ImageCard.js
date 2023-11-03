import React, { useState } from 'react';
import './ImageCard.css'; // Ensure you have this CSS file with styles defined

const ImageCard = ({ imageSrc, onImageClick }) => {
  // State to manage the count of likes
  const [likesCount, setLikesCount] = useState(0);

  // Function to increment the likes count
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
