const porta = 3003;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => { //O primeiro parâmetro é a URL
    res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => { //Os ':' antes do id indica que ele um parâmetro que está sendo enviado pela URL
    //O req.params é o local onde ficam guardados os parâmetros enviados na URL que podem ser acessados através da notação ponto
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, resp, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    resp.send(produto); //Converte para JSON
});

app.put('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });
    resp.send(produto); //Converte para JSON
});

app.delete('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id);
    resp.send(produto); //Converte para JSON
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});