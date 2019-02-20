import React, { Component } from 'react';

import Header from './Header/index';
import Footer from './Footer/index';

import Home from '../pages/home'
import User from '../pages/user'

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      
      <Footer />
    </div>
    );
  }
}

export default App;