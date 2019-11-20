import React from "react";

export default class AddOption extends React.Component {
  // using the babel plugin transform-class-properties: it removes the this binding construction
  // and uses the arrow ES6 function
  state = {
    error: undefined
  };
  handleAddOption = e => {
    e.preventDefault();
    const options = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptionn(options);
    this.setState(() => {
      return {
        error: error
      };
    });
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
