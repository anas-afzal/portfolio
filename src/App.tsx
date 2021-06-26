import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Intro from './components/Intro';

function App() {
  return (
    <div className = "flex flex-col h-full w-full bg-gray-50">
      <Header/>
      <Intro/>
    </div>
  );
}

export default App;
