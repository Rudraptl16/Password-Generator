import React from 'react';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import { DarkModeProvider } from './hooks/useDarkMode';
import './App.css';

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <PasswordGenerator />
      </div>
    </DarkModeProvider>
  );
}

export default App;