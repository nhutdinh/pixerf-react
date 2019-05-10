import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './components/photo'

function App() {
  const photo = {
    liked: false
}
  return (
    <div className="App">
      <Photo data={photo}></Photo>
    </div>
  );
}

export default App;
