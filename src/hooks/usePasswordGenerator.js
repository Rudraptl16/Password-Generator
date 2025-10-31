import { useState, useCallback } from 'react';
import { generatePassword, calculateStrength } from '../utils/passwordUtils';
import { DEFAULT_OPTIONS } from '../utils/constants';

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  const generate = useCallback(() => {
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
    return newPassword;
  }, [length, options]);

  const strength = calculateStrength(password, options);

  return {
    password,
    length,
    setLength,
    options,
    setOptions,
    generatePassword: generate,
    strength
  };
};