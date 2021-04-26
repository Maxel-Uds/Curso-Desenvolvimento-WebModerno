let numero = 1; //Dá preferência ao escopo menor, tem o escopo de bloco
{
    let numero = 2;
    console.log('Dentro = ' + numero);
}
console.log('Fora = ' + numero);