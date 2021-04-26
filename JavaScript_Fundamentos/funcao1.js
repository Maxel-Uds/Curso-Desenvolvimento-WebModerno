//Função sem retorno
function imprimirSoma(a, b)
{
    console.log(a + b);
}

imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2, 3, 4, 5, 6, 7);
imprimirSoma();

//Função com retorno
function soma(a, b = 1) //b te valor padrão caso não seja definido
{
    return a + b;
}
console.log(soma(2, 3));
console.log(soma(2));
