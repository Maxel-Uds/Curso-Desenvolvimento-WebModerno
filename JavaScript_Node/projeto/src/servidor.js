const porta = 3003;
const express = require('express');
const app = express();

app.get('/produtos', (req, res, next) => { //O primeiro parâmetro é a URL
    res.send({ nome: 'Notebook', preco: 123.45 }); //Vai converter para JSON
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});