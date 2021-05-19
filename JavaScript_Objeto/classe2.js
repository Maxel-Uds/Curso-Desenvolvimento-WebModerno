class Avo
{
    constructor(sobrenome)
    {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo //A palavra exteds serve para indicar que esta classe está herdando um protótipo de outra
{
    constructor(sobrenome, profissao = 'Professor')
    {
        super(sobrenome); //Serve para instaciar o construtor da super classe
        this.profissao = profissao;
    }
}

class Filho extends Pai
{
    constructor()
    {
        super('Silva');
    }
}

const filho = new Filho();
console.log(filho);