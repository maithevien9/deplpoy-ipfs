import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Login username='Neiv' />
      </header>
    </div>
  );
}

export default App;
