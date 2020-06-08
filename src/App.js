import React from 'react';
import MainComponent from './Components/MainComponent';
import {BrowserRouter} from 'react-router-dom';


import './App.css';



function App() {
  return (
    <BrowserRouter>
    
         <div >
             <MainComponent/>
         </div>

      </BrowserRouter>
  );
}

export default App;
