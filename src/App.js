import React from 'react';

import './App.css';

import SkyBackground from './SkyBackground/SkyBackground';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SkyBackground/>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", minHeight:"100vh"}}>
          <h1 style={{color: "white", fontFamily: '"Segoe UI light", sans-serif', opacity: ".3", textShadow:"0 0 10px #fff", fontSize:"1.5em"}}>
              Hi, I'm Jeremy, <br/>
              fullstack developer!
          </h1> 
        </div>
      </div>
    );
  }
}

export default App;
