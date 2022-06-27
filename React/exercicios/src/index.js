import React from 'react';
import ReactDOM from 'react-dom/client';
import Multi, { BoaNoite } from './componentes/Multiplos';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Multi.BoaTarde nome='Maxel'/>
        <BoaNoite nome='Ana'/>
    </div>
);