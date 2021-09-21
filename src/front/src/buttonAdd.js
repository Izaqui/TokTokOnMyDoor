import React from 'react';
import './style.css';
export default function button() {
const nomeProdutoInput = document.querySelector("#nome-Produto");
const produto = [];
class LoggingButton extends React.Component {
    handleClick() {
        const nomeProduto = nomeProdutoInput.value;
        if (nomeProduto != null && nomeProduto !== "") {
            produto.push({ nome: nomeProduto });
            nomeProdutoInput.value = "";
        }
        const lista = document.querySelector("ul #itens");
    }
  
    render() {

      return (
        <button className="btn" onClick={() => this.handleClick()}>
          Adicionar
        </button>
      );
    }
}
}