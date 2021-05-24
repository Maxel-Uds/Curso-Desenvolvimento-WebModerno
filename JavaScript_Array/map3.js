Array.prototype.map2 = function(callBack) {
    const array = [];
    for(let i = 0; i < this.length; i++)
    {
        array.push(callBack(this[i], i, this));
    }
    return array;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
];

let precos = carrinho.map2(function(e) {
    let obj = JSON.parse(e);
    return `R$ ${obj.preco.toFixed(2).replace('.', ',')}`;
});

console.log(precos);