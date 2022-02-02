import React, { Component } from 'react';
import LengthCaracters from '../LengthCaracters/LengthCaracters';
import Settings from '../Settings/Settings';
import letters from '../../data/letters';
import './Main.css'

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      password: '',
      lengthPassword: '4',
    }
  }

  handleLength = ({ target: { value } }) => {
    this.setState({ lengthPassword: value });
  }

  createPassword = () => {
    const { lengthPassword } = this.state;
    let password = '';

    for (let index = 1; index <= lengthPassword; index += 1) {
      const index = Math.round(Math.random() * letters.length);
      password += letters[index];
    };

    return password;
  }

  handleClick = (event) => {
    event.preventDefault();
    const password = this.createPassword();

    console.log(password);
  }

  render() {
    const { password, lengthPassword } = this.state;

    return (
      <main className="body_main">
        { password.length === 0
          ? <p className="main_password">CLICK GENERATE</p>
          : <p className="main_password">{ password }</p>
        }

        <LengthCaracters length={ lengthPassword } onChange={ this.handleLength } />
        <Settings onClick={ this.handleClick } />
      </main>
    );
  }
}
