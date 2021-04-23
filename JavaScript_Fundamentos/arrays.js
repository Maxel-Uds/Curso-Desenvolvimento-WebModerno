const valores = [7.7, 8.9, 6.3, 9.2]; //Array declarado de forma literal
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);
console.log(valores.length); //Comprimento do array

valores.push({id: 3}, false, null, 'teste'); //Adiciona elementos no array
console.log(valores);

console.log(valores.pop()); //Tira o último valor do array
delete valores[0]; //Deleta elementos de um determinado índice
console.log(valores);