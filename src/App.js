import React, { Component }  from 'react';
import styles                from './app.module.css';
import CalendarNav from './components/header/index.js'

class App extends Component {

  constructor (props) {
    super( props );
    this.state = {
    };
  }


  render () {

    return (
      <CalendarNav/>
    );

  }

}

export default App;