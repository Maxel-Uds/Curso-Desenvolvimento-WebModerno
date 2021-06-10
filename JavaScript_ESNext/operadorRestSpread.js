//Operador ... rest(juntar)/spread(espalhar)
//Usar rest como parâmetro de função

//Usando com objetos
const funcionario = { nome: 'Maria', salario: 12348.99 };
const clone = { ativo: true, ...funcionario};
console.log(clone);

//Usar spread com array
const grupoA = ['João', 'Pedro', 'Glória'];
const grupoFinal = ['Maria', 'Rafael', ...grupoA];
console.log(grupoFinal);