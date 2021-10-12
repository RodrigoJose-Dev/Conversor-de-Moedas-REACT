import React, { Component } from "react";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    };

    //fazer o this existir para 'converter'
    this.converter = this.converter.bind(this);
  }

  converter() {
    let usd_brl = 5.53;

    let result = this.state.moedaA_valor * usd_brl;

    this.setState({ moedaB_valor: result });
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
        <h2>Valor da Conversão: {this.state.moedaB_valor}</h2>
      </div>
    );
  }
}
