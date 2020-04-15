import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    };
  }

  aumentar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentar}>Aumentar</button>
      </div>
    );
  }
}

export default Contador;
