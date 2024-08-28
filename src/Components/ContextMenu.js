import React from 'react';

const ContextMenu = React.forwardRef(({ position, options, onClose }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        background: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        padding: '10px',
        borderRadius: '4px',
      }}
    >
      {options.map((option, index) => (
        <div
          key={index}
          onClick={option.onClick}
          style={{ padding: '8px', cursor: 'pointer' }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
});

export default ContextMenu;
