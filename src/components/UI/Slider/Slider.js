import React from 'react';
import './Slider.css';

const Slider = ({ min, max, value, onChange, step = 1, disabled = false }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        step={step}
        disabled={disabled}
        className="slider"
      />
      <div className="slider-labels">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default Slider;