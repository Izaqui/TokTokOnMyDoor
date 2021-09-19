import React from 'react';
import './style.css';

export default function Card() {
    return (
        <card className="card">
            <h1>product</h1>
            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
               <img src="img_avatar.png" alt="Avatar"/>
                </div>
                <div class="flip-card-back">
                <h1>Nome Produto</h1> 
                <p>Descrição</p> 
                <p>valor</p>
                </div>
            </div>
            </div>
        </card>
     );
}

