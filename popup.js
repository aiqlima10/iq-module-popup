import React, { useState } from 'react';

const Popup = ({ title, content, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Popup</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-header">
            <h2>{title}</h2>
            <button onClick={handleClose}>Close</button>
          </div>
          <div className="popup-content">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Popup;
