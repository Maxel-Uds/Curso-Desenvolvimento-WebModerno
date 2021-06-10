function falarDepoisDe(segundos, frase)
{
    //Primeiro parâmetro é quando a promise é antendida e a segunda quando não é.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase);//Só aceita um parâmetro
        }, segundos * 1000);
    });
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e));