import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ label, checked, onChange, disabled = false }) => {
  return (
    <label className={`toggle-switch ${disabled ? 'toggle-disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="toggle-input"
      />
      <span className="toggle-slider"></span>
      <span className="toggle-label">{label}</span>
    </label>
  );
};

export default ToggleSwitch;