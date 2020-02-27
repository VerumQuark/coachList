import React, { Component }  from 'react';
import styles                from './app.module.css';
import Icon                  from '@mdi/react';
import { mdiEye, mdiEyeOff } from '@mdi/js';

class App extends Component {

  constructor (props) {
    super( props );
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        password: '', //A-Z a-z 0-9 {8,}
      },
      isHidden: true,
    };
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;

    this.setState( {
                     [name]: value,
                   }
    );
  };

  sendRequest = () => {

    const options = {
      method: 'POST',
      body: JSON.stringify( this.state.data ),
      headers: {
        'Content-type': 'application/json'
      }
    };

    fetch( 'http://192.168.0.106:3000/authorization/sign_up', options )
      .then( response => response.json() )
      .then( user => {
        this.setState( {
                         user,
                       } );
        sessionStorage.setItem( 'USER', JSON.stringify( user )
        );
      } );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.sendRequest();
  };

  render () {

    const { isHidden } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={`${styles.flexBoxContainer} ${styles.signUpForm}`}>
        <input type='text'
               name='firstName'
               placeholder='firsName'
               onChange={this.handleChange}/>
        <input type='text'
               name='lastName'
               placeholder='lastName'
               onChange={this.handleChange}/>
        <input type='text'
               name='email'
               placeholder='email'
               onChange={this.handleChange}/>
        <input type={isHidden
                     ? 'password'
                     : 'text'}
               name='password'
               placeholder='password'
               onChange={this.handleChange}/>
        <Icon onMouseDown={() => {
          console.log("hehe");
          this.setState( {
                           isHidden: false,
                         });
        }} onMouseUp={() => {
          console.log("hoho");
          this.setState( {
                           isHidden: true
                         } );
        }}
              path={isHidden
                    ? mdiEye
                    : mdiEyeOff}/>
        <input type={isHidden
                     ? 'password'
                     : 'text'}
               name='passwordConfirmed'
               placeholder='passwordConfirmed'
               onChange={this.handleChange}/>
        <input type='submit'
               value='sign up'
               className={`${styles.signUpButton}`}/>
      </form>);

  }

}

export default App;