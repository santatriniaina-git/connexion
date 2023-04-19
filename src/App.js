import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer";
import ButtonConnexion from './components/ButtonConnexion';
import Form from './components/tabs';

function App() {
  return (
    <div>
      <Header/>
      <Form/>
      <ButtonConnexion/>
      <Footer/>
    </div>
  );
}

export default App;
