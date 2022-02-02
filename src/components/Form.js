import React, { Component } from "react";
import Checkbox from "./Checkbox";
import Number from "./Number";
import { generatePass } from "../services/password";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      upperCase: false,
      lowereCase: false,
      numbers: false,
	  symbols: false,
      symbols: false,
      length: 8,
      password: "GENERATE PASSWORD",
    };
    this.handleChange = this.handleChange.bind(this);
    this.getPass = this.getPass.bind(this);
    this.addPass = this.addPass.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type !== "checkbox" ? target.value : target.checked;
    this.setState(
      {
        [name]: value,
      },
      () => this.getPass()
    );
  }

  getPass() {
    const { upperCase, symbols, numbers, length } = this.state;
    return generatePass(upperCase, symbols, numbers, length);
  }

  addPass() {
    this.setState({ password: this.getPass() });
  }

  render() {
    const { length, password } = this.state;
    return (
      <form>
        <div>
          <button onClick={this.addPass} type="button">
            Click Generate
          </button>
        </div>
        <section className="number">
          <p>Length: {length}</p>
          <Number name="length" handleChange={this.handleChange} />
        </section>
        <section className="settings">
          <p>settings</p>
          <Checkbox
            handleChange={this.handleChange}
            name="upperCase"
            textLabel="Include Uppercase"
          />
          <Checkbox
            handleChange={this.handleChange}
            name="lowereCase"
            textLabel="Include Lowercase"
          />
          <Checkbox
            handleChange={this.handleChange}
            name="numbers"
            textLabel="Include Numbers"
          />
          <Checkbox
            handleChange={this.handleChange}
            name="symbols"
            textLabel="Include Symbols"
          />
        </section>
        <section className="container generate">{password}</section>
      </form>
    );
  }
}

export default Form;