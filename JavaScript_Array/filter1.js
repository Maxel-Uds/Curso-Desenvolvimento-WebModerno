const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'IPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
];

//O filter trabalha com true e false
console.log(produtos.filter(p => p.preco >= 500).filter(p => p.fragil));