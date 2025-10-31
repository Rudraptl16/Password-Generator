import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false, 
  fullWidth = false,
  type = 'button',
  ...props 
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${fullWidth ? 'btn-full-width' : ''} ${disabled ? 'btn-disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;