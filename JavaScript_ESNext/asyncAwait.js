const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';

            res.on('data', dados => {
                resultado += dados;
            });
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                }
                catch(e) {
                    reject(e);
                }
            });
        });
    });
}

//Recurso do ES8
//Objetivo de simplificar o uso de promises
//O Await só vai funcionar dentro das funções marcadas com Async
let obterAlunos = async() => {
    const tA = await getTurma('A');
    const tB = await getTurma('B');
    const tC = await getTurma('C');
    return [].concat(tA, tB, tC); //Retorna um objeto AsyncFunction
}

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes));