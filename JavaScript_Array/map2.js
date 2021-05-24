const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
];

let precos = carrinho.map(function(e) {
    let obj = JSON.parse(e);
    return `R$ ${obj.preco.toFixed(2).replace('.', ',')}`;
});

console.log(precos);