const fs = require('fs');

//A variável __dirname retorna o caminho até o diretório no qual o arquivo está sendo executado
const caminho = __dirname + '/arquivo.json';

//Leitura síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

//Leitura assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});

const config = require('./arquivo.json');
console.log(config.db);

//Função que lê uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da Pasta:');
    console.log(arquivos);
});
console.log(__filename);