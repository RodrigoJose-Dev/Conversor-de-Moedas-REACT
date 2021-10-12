import React, { Component } from "react";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    };
  }

  converter() {
    console.log("convertido");
  }

  render() {
    return (
      <div classname="conversor">
        <h2>
          {this.props.moedaA} para {this.props.moedaB}
        </h2>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ moedaA_valor: event.target.value });
          }}
        ></input>
        <button type="button" onClick={this.converter}>
          Converter
        </button>
        <h2>Valor Convertido</h2>
      </div>
    );
  }
}
