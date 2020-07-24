import React from 'react';

import './App.css';
import Logo from './logo';
import Title from './title';
import Link from './link';
import Message from './message';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Title />
        <Link />
        {Message}
      </header>
    </div>
  );
}

export default App;
