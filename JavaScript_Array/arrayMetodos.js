const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); //Função que remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); //Função que remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); //Função que adiciona um elemento no início do array
console.log(pilotos);

//Usando splice

//Adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa'); //Adiciona antes do índice selecionado
console.log(pilotos);

//Removendo
pilotos.splice(3, 1); //Remove para frente a partir do índice selecionado
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); //Retorna um novo array formado a partir do índice selecionado
console.log(algunsPilotos);

//Formará um array a partir de um índice até um índice final, mas o elemento do índice final não entra no array
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);