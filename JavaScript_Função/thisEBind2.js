function Pessoa()
{
    this.idade = 0;
    const self = this; //A referência do this nunca vai variar

    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
}

new Pessoa