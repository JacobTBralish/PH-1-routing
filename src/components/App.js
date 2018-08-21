import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div>
        This is App.js
        {/* This allows you to immit switch and utilize the function to only use one page at once*/}
        <nav>
          <Link to = '/'> Home</Link>
          <Link to = '/about'> About</Link>

        </nav>

        <main>
          <Route exact path="/" Component= {Home} />
          <Route path="/about" Component= {About} />
        </main>
  
      </div>
    );
  }
}

export default App;
