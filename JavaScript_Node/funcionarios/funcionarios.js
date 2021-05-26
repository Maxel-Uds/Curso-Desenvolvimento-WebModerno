const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const getSexoPais = sp => sp.genero === 'F' && sp.pais === 'China';
const getMenorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario? func : funcAtual;
}

//Mulher chinesa com o menor salário
axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios.filter(getSexoPais).reduce(getMenorSalario));
});

