const fabricantes = ["Mercedes", "Audi", "BMW"];
function imprimir(nome, indice)
{
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); //Vai fazer o callback (chamar devolta) da função 'imprimir' para cada elemento do array
fabricantes.forEach(fabricante => console.log(fabricante))