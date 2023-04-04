import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header";
import { Text } from './components/text';
import { Photo } from './components/photo';


function App() {
  return (
    
    <div>
      < Header/>
      <div className="middle">
        < Text/>
        < Photo/>
      </div>
    </div>
  );
}

export default App;
