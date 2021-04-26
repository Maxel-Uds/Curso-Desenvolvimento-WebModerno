{{{{ var sera = 'Será???' }}}} //Variável de escopo global
console.log(sera);

function teste()
{
    var local = 123; //Variável de escopo local
}

teste();
console.log(local);