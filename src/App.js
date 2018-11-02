import React, { Component } from 'react';
import './App.css';

import Jumbotron from "./components/jumbotron";
import ContactsList from "./components/contact-list"

class App extends Component {
  render() {
    return (
      <div className="App">
       
      <Jumbotron/>

    <div>
      <main className="ui contact-list main text container">
      <ContactsList />
      </main>
    </div>


      </div>
    );
  }
}

export default App;
