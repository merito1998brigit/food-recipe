import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home'; 
import './App.css';

function App() {
  return (
    <React.Fragment>
    
      <div className="jumbotron-fluid">
        <Header/>  
        <Home/>  
        </div>
    </React.Fragment>
  
  );
}

export default App;
