/**
 *  __proto__ : 
 * Deprecado: Este recurso não é mais recomendado.
 *  Embora alguns navegadores ainda possam apoiá-lo, 
 * ele pode já ter sido removido dos padrões da Web relevantes.
 */

//new Object -> Object.prototype
const objA ={
    chaveA: 'A'
    //__proto__: Object.prototype
};

const objB ={
    chaveB: 'B'
    //__proto__: objA
};

const objC = {
    chaveC:'C'
    //__proto_: objB
}

//Definindo objA como prototype de objB, isso me permite accesar as chaves de objA em objB.
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);


// Com Funcao construtora

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - this.preco * (percentual/100);
}

Produto.prototype.aumentaPreco = function(percentual){
    this.preco = this.preco + this.preco * (percentual/100);
}

const p1 = new Produto('Caneca', 50);
console.log(p1);
p1.desconto(80);
console.log(p1, 'Com desconto 80%');

const p2 = {
    nome: 'Cueca',
    preco: 15 // o nome dessa chave deve bater com o nome da chave do this de acima.
};

Object.setPrototypeOf(p2, p1);
console.log(p2);
p2.aumentaPreco(10);
console.log(p2, 'Com aumento 10%');

//Criando um objete e ja setando seu prototype

const p3 = Object.create(Produto.prototype);
console.log(p3);//gera um objeto vacio porque ainda não atribui as chaves.

p3.nome = 'sabonete';
p3.preco = 250;
p3.aumentaPreco(10);
console.log(p3, 'Com Aumento 10%');