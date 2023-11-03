import React from 'react';
import './ImageModal.css';

const ImageModal = ({ src, onClose }) => {
  if (!src) return null; // Don't render the modal if there is no source

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Full resolution" className="full-image" />
      </div>
    </div>
  );
};

export default ImageModal;
