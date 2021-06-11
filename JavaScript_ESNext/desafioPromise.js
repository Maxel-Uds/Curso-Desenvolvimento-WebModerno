const fs = require('fs');
const caminho = __dirname + '/dados.txt';

function lendoArquivo(rota)
{
    return new Promise((resolve) => {
        fs.readFile(rota, 'utf-8', (erro, conteudo) => {
            resolve(conteudo);
        });
    });
}

lendoArquivo(caminho).then(console.log).catch(e => console.log(e.message));