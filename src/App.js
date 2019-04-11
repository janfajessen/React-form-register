import React, { Component } from 'react';

import './App.css';
import Register from './Register.jsx';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className="App-header">

          soy el header

      </header>

        <main>
          <Register />
        </main>

        <footer>
          soy el footer
      </footer>
      </div>
    );
  }
}

export default App;

