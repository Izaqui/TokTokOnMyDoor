import React from 'react';
import './style.css';
import button from'./buttonAdd';
export default function Card() {
    return (
        <card className="card">
            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
               <img src="img_produto.png" alt="Produto"/>
                </div>
                <div class="flip-card-back">
                <h1 id="nome-Produto">Nome Produto</h1> 
                <p>Descrição</p> 
                <p>valor</p>
                </div>
            </div>
            </div>
            <button placeholder="Adicionar"/>
        </card>
     );
}

