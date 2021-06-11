//Uma promessa de algo que vai ser executado no futuro e um valor que vai ser devolvido no futuro
let p = new Promise((resolve) => {
    //A promessa devolve apenas um valor, objeto, ou array
    resolve(['João', 'Marcos', 'Lucas', 'Gustavo']);
});

//Método para acessar o valor que é devolvido pela promessa
//O resultado de um then é passado para outro que fará outra operação
p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(console.log);