//pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'; //Altera o atributo para qual o endereço aponta e não o endereço em si, que e constante
console.log(pessoa);

//pessoa <- 456 <- {...}
//pessoa = { nome: 'Ana'} Aqui ocorre a tentativa de mudança de endereço do objeto. Vai dar erro porque o a referência do obj é CONSTANTE

Object.freeze(pessoa); //função congela o objeto e não permite mais alterações, adições ou deleções
pessoa.nome = 'Maria';
console.log(pessoa);