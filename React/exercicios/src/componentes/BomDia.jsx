import React from 'react';

export default function bomDia(props) {
    return [<h1 key='h1'>Bom dia {props.nome}!</h1>, <h2 key='h2'>Até Breve!</h2>];          
}

// export default function bomDia(props) {
//     return <React.Fragment>
//                 <h1>Bom dia {props.nome}!</h1>
//                 <h2>Até Breve!</h2>
//             </React.Fragment>;
// }

// export default function bomDia(props) {
//     return <div>
//                 <h1>Bom dia {props.nome}!</h1>
//                 <h2>Até Breve!</h2>
//             </div>;
// }