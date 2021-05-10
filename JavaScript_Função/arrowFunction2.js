function Pessoa()
{
    this.idade = 0;

    setInterval(() => { //'This' dentro de uma arrow function é fixo
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa