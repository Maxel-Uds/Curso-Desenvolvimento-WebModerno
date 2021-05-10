let dobro = function(a) {
    return a * 2;
}

dobro = (a) => {
    return a * 2;
}

dobro = a => a * 2; //Omitir os () apenas se tiver um parâmetro, return implícito
console.log(dobro(Math.PI));

let ola = function() {
    return 'Olá!';
}

ola = () => 'Olá!';
ola = _ => 'Olá!'; //Possui parâmetro
console.log(ola());