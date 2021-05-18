//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0';
const avo = { attr1: 'A' } //avo herda de Object (avo tem como protótipo o Object)
const pai = { __proto__: avo, attr2: 'B'} //pai herda de avo (pai tem como protótipo o avo)
const filho = {__proto__: pai, attr3: 'C'} //filho herda de pai (filho tem como protótipo o pai)

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax)
        {
            this.velAtual += delta;
        }
        else 
        {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual} km/h  de ${this.velMax} km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //Shadowing (o atributo do objeto que herda sombreia o atributo que está sendo herdado se ele conter um igual)
}

const volvo = {
    modelo: 'V40',
    status() { //Shadowing
        return `${this.modelo}: ${super.status()}`; //'super' faz com que a função que está sendo invocada seja a do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro); //Estabelece a relação entre o objeto (1° parâmetro) e o protótipo (2° parâmetro)
Object.setPrototypeOf(volvo, carro);

volvo.acelerarMais(100);
ferrari.acelerarMais(300);
console.log(volvo.status());
console.log(ferrari.status());