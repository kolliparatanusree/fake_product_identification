import React, { useEffect } from 'react';

const Popup = ({ message, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div style={styles.popup}>
      {message}
    </div>
  );
};

const styles = {
  popup: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px',
  },
};

export default Popup;