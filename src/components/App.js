import React, { Component } from 'react';
import Home from './Home/Home';
import About from '/About/About';

class App extends Component {


  componentDidMount(){
    /* addEventListener listens for the even of a change and forceUpdate forces the page to rerender */
    window.addEventListener('hashchange', () => this.forceUpdate())
  }


  render() {
    return (
      <div>
        This is App.js
        {/* This allows you to immit switch and utilize the function to only use one page at once*/}
        <div>
          <a href = '/#> home'></a>
          <a href = '/#/about'> about</a>

        </div>
          {window.location.hash === '#/about' ? <About /> : <Home />};
      </div>
    );
  }
}

export default App;
