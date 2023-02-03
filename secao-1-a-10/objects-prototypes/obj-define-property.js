//defineProperty - defineProperties
/**
 * define um novo propriedade diretamente em um objeto,
 * ou modifica uma propriedade existente em um objeto, e 
 * devolve o objeto.
 */

/*
    Utilizando defineProperty
    *************************
 */
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, 'estoque', {
        enumerable: false,//enumerable permite que uma chave seja visualizada no laço for...in ou no metodo object.keys().
        value: function(){return estoque},// valor (nesse caso é uma função mas pode retornar o valor pasado diretamente)
        writable:false, //writable define se o valor pode ser alterado.
        configurable: false,//define se a propiedade é ou não configuravel.
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;// com writable false o valor nao pode ser alterado.
delete p1.estoque; //não pode ser deletada ja que configurable é false.
console.log(p1);
console.log(p1.estoque());//chamando o metodo.


//TESTANDO ENUMERABLE (a chave estoque so sera visivel com enumerabel definido como true)
/***********************/
console.log(Object.keys(p1));// retorna um array com os nomes  das chaves do objeto.


for(let chave in p1){
    console.log(chave);
}

console.log('#################################');
/**
    Utilizando defineProperties
 */

function Carro( marca, modelo, ano){
    Object.defineProperties(this,{
        marca:{
            enumerable: true,
            value:marca,
            writable:false,
            configurable:false
        },
        modelo:{
            enumerable:true,
            value:modelo,
            writable:false,
            configurable:false,
        },
        ano:{
            enumerable: true,
            value: ano,
            writable: true,
            configurable:true,

        }
    })
}

const myCar = new Carro('Ford', 'Mustang', 1980);
console.log(myCar);
console.log(Object.keys(myCar));

for(let chave in myCar){
    console.log(chave, myCar[chave]);
}