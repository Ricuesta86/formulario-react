import React from "react";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <>
        <h1>Formulario 1</h1>
        <input
          type="text"
          onChange={this.handleChange}
          // value={this.state.input}
        />
        <br />
        <br />
        <p>{this.state.input}</p>
      </>
    );
  }
}
