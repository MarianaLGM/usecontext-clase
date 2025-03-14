import { LanguageProvider } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Greeting from './Greeting';
import React from 'react';


const App = () => {
  return (
    <LanguageProvider>
      <div>
        <h1>Language Selector App</h1>
        <LanguageSelector/>
        <Greeting/>
      </div>
    </LanguageProvider>
  );
};

export default App;
