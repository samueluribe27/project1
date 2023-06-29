import React, { useState } from 'react';
import phrases from './phrases.json';

const App = () => {
  const [fortune, setFortune] = useState('');

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setFortune(phrases[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Obtener fortuna</h1>
      <button onClick={handleClick}>Obtener fortuna</button>
      {fortune && <p>{fortune}</p>}
    </div>
  );
};

export default App;
