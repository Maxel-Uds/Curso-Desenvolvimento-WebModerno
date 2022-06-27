import React from 'react';
import ReactDOM from 'react-dom/client';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';
// import Saudacao from './componentes/Saudacao';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Pai nome="Claudemir" sobrenome="Lopes">
        <Filho nome="Maxel"/>
        <Filho nome="Paulo"/>
        <Filho nome="Carla"/>
    </Pai>
);
// root.render(<Saudacao tipo="Bom Dia" nome="Maxel!"/>);