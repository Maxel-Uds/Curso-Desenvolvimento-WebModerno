//Object.preventExtensions (impede que objetos sejam estendidos)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});
console.log('Estensível:',Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca'; //Vai ser ignorado
delete produto.tag;
console.log(produto);

//Object.seal (sela o objeto permitindo apenas a alteração de valores dos atributos)
const pessoa = { nome: 'Marcos', idade: 35 }
Object.seal(pessoa);
console.log('Selado:',Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'; //Vai ser ignorado
pessoa.nome = 'João';
delete pessoa.idade; //Vai ser ignorado
console.log(pessoa);

//Object.freeze (torna o objeto, como um todo, inalterável)