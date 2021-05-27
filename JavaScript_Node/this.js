console.log(this === global); //This aponta para module.exports
console.log(this === module); //This é um objeto que é a referência de module.exports
console.log(this === module.exports);
console.log(this === exports); //Exports aponta para o mesmo objeto que o this

function logThis() {
    console.log('Dentro de uma função....');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global); //O this dentro da função aponta para o objeto global
}

logThis();