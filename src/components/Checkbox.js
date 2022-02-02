import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { textLabel, name, handleChange } = this.props;
    return (
      <div className="container">
        <label htmlFor={textLabel}>
          {textLabel}
          <input
            onChange={ handleChange }
            name={name}
            id={textLabel}
            type="checkbox"
          />
        </label>
      </div>
    );
  }
}

export default Checkbox;