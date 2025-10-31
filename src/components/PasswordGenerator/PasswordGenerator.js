import React from 'react';
import { usePasswordGenerator } from '../../hooks/usePasswordGenerator';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useClipboard } from '../../hooks/useClipboard';
import Button from '../UI/Button';
import ToggleSwitch from '../UI/ToggleSwitch';
import Slider from '../UI/Slider';
import Header from '../Layout/Header';
import Container from '../Layout/Container';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const {
    password,
    length,
    setLength,
    options,
    setOptions,
    generatePassword,
    strength
  } = usePasswordGenerator();

  const { darkMode, toggleDarkMode } = useDarkMode();
  const { copied, copyToClipboard } = useClipboard();

  const handleOptionChange = (option) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <div className={`password-generator ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Container>
        <Header 
          title="Password Generator" 
          darkMode={darkMode} 
          onToggleDarkMode={toggleDarkMode} 
        />
        
        <div className="password-display">
          <input 
            type="text" 
            value={password} 
            readOnly 
            className="password-input"
            placeholder="Generate a password..."
          />
          <Button 
            onClick={() => copyToClipboard(password)}
            disabled={!password}
            variant="primary"
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </Button>
        </div>

        <div className="strength-indicator">
          <span>Strength: </span>
          <div className={`strength-bar strength-${strength}`}>
            <div className="strength-fill"></div>
          </div>
          <span className="strength-text">{strength}</span>
        </div>

        <div className="options">
          <div className="length-control">
            <label>
              Password Length: <span className="length-value">{length}</span>
            </label>
            <Slider
              min={4}
              max={32}
              value={length}
              onChange={setLength}
            />
          </div>

          <div className="checkbox-group">
            {Object.entries(options).map(([key, value]) => (
              <ToggleSwitch
                key={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                checked={value}
                onChange={() => handleOptionChange(key)}
              />
            ))}
          </div>
        </div>

        <Button 
          onClick={generatePassword}
          variant="primary"
          fullWidth
        >
          Generate Password
        </Button>
      </Container>
    </div>
  );
};

export default PasswordGenerator;