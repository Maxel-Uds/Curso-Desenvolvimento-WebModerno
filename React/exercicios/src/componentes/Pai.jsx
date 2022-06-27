import React from 'react';
import Filho from './Filho';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Maxel" sobrenome={props.sobrenome}/>
            <Filho {...props}/>
            <Filho {...props} nome="João"/>
        </ul>
    </div>