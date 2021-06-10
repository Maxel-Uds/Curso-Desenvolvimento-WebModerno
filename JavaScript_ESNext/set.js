//Estrtura de conjunto, não indexada e que não permite repetição
const times = new Set();
times.add('Vasco'); 
times.add('São Paulo').add('Palmeiras').add('Corinthias');
times.add('Flamengo');
times.add('Vasco');

console.log(times);
console.log(times.size);
console.log(times.has('Vasco'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));

const nomes = ['João', 'Marcos', 'Lucas', 'Jonas', 'João'];
const nomeSet = new Set(nomes);
console.log(nomeSet);