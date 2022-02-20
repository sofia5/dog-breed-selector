import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import DogPicker from './components/DogPicker';

function App() {
  return (
    <div className="App">
      <Header />
      <DogPicker /> 
    </div>
  );
}

export default App;
