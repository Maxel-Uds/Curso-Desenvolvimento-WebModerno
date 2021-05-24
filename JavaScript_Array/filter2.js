Array.prototype.filter2 = function(callback) {
    const array = [];
    for(let i = 0; i < this.length; i++)
    {
        if(callback(this[i], i, this))
        {
            array.push(this[i]);
        }
    }
    return array;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'IPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
];

console.log(produtos.filter2(p => p.preco >= 500).filter2(p => p.fragil));