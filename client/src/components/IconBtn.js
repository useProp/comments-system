import React from 'react';

const IconBtn = ({ Icon, children, isActive, color, ...rest }) => {
  return (
    <button
      className={`btn icon-btn ${isActive ? 'icon-btn-active' : ''} ${color || ''}`}
      {...rest}
    >
      <span className={`${children ? 'mr-1' : ''}`}>
        <Icon />
      </span>
      {children}
    </button>
  );
};

export default IconBtn;
