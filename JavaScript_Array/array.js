console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[3] = 'Paulo';
aprovados.push('João'); //Função que adiciona um elemento no fim do array
console.log(aprovados);
console.log(aprovados.length); //Retorna a quantidade de elementos no array

aprovados[9] = 'Rafael';
console.log(aprovados);
console.log(aprovados.length);

aprovados.sort(); //Função que ordena o array
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
//Função para adicionar elementos em um índice ou remover ou adicionar e remover na mesma chamada
//O primeiro parâmetro indica o índice do elemento a partir do qual começará a ser feita a remoção
//O segundo parâmetro indica quantos elementos serão removidos
//Os parâmetros seguintes indicam os valores dos elementos que serão adicionados nas respectivas posições dos que foram removidos
aprovados.splice(1, 2, 'Elemento1', 'Elemento2');
console.log(aprovados);