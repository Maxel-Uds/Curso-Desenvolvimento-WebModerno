class Lancamento
{
    constructor(nome = 'Genérico', valor = 0)
    {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinaceiro
{
    constructor(mes, ano)
    {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos) //Paramêtro spred/rest aceita um número indeterminado de valores
    {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario()
    {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => valorConsolidado += l.valor);
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('luz', -220);
const contas = new CicloFinaceiro(5, 2021);
contas.addLancamentos(salario, contaDeLuz);

console.log(`Data: ${contas.mes}/${contas.ano}`);
console.log('Balanço:',contas.sumario());
