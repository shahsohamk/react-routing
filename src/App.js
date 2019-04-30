import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Heading} from './components/Heading'
import {Layout} from './components/Layout'
import {Footer} from './components/Footer'

function App() {
  return (
    <div>
      <Heading/>
      <div>
        <Layout/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
