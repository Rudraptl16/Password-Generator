export const generatePassword = (length, options) => {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let characterPool = '';
  let generatedPassword = '';

  if (options.uppercase) characterPool += uppercase;
  if (options.lowercase) characterPool += lowercase;
  if (options.numbers) characterPool += numbers;
  if (options.symbols) characterPool += symbols;

  if (characterPool.length === 0) {
    return '';
  }

  // Ensure at least one character from each selected type
  const selectedTypes = [];
  if (options.uppercase) selectedTypes.push(uppercase);
  if (options.lowercase) selectedTypes.push(lowercase);
  if (options.numbers) selectedTypes.push(numbers);
  if (options.symbols) selectedTypes.push(symbols);

  for (let i = 0; i < Math.min(selectedTypes.length, length); i++) {
    const randomChar = selectedTypes[i][Math.floor(Math.random() * selectedTypes[i].length)];
    generatedPassword += randomChar;
  }

  // Fill the rest randomly
  for (let i = generatedPassword.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    generatedPassword += characterPool[randomIndex];
  }

  // Shuffle the password to mix the guaranteed characters
  return generatedPassword.split('').sort(() => Math.random() - 0.5).join('');
};

export const calculateStrength = (password, options) => {
  if (!password || password.length < 4) return 'weak';
  
  let score = 0;
  
  // Length score
  if (password.length >= 16) score += 3;
  else if (password.length >= 12) score += 2;
  else if (password.length >= 8) score += 1;
  
  // Character variety score
  const typesUsed = [
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password)
  ].filter(Boolean).length;
  
  score += typesUsed * 2;
  
  // Bonus for using all selected options
  const selectedOptions = Object.values(options).filter(Boolean).length;
  if (typesUsed === selectedOptions) score += 1;
  
  if (score >= 8) return 'strong';
  if (score >= 5) return 'medium';
  return 'weak';
};