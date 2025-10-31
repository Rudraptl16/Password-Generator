import { useState, useEffect } from 'react';

export const useBackgroundAnimation = () => {
  const [animationType, setAnimationType] = useState('gradient');

  const animationClasses = {
    gradient: 'gradient-bg',
    particles: 'particles-bg',
    geometric: 'geometric-bg',
    bubbles: 'bubbles-bg',
    waves: 'waves-bg',
    none: 'none-bg'
  };

  const getAnimationClass = (darkMode, type) => {
    return `${darkMode ? 'dark-mode' : 'light-mode'} ${animationClasses[type]} animated-bg`;
  };

  return {
    animationType,
    setAnimationType,
    getAnimationClass,
    animationClasses
  };
};