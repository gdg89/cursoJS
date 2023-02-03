/**
 *  - A diferença com os arrays que são 
 *    criados com [], os objetos são 
 *    criados com {}.
 *  - Os atributos são separados por virgulas.
 * 
 */


const pessoa = {
    nome: 'Giuliano',
    sobrenome: 'García',
    idade: 33,

    //funcion dentro de um objeto são chamades de metodos.(não necesita da palabra function).
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);//a palavra this faz referencia ao objeto pessoa(nesse caso).
        console.log( `A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    } 
};

// accesando ao atributo do objeto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);

//CHAMANDO O METODOS fala e incrementaIdade do objeto pessoa.
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();


// Criando objetos com function (ela é uma factory, pois ta criando um objeto).

function criaPessoa(nome, sobrenome, idade){//parametros
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };//retorna um objeto

}
//criando pessoa
const pessoa1 = criaPessoa('Giuliano', 'García', 33);//argumentos: é o valor pasado para os parametros.
const pessoa2 = criaPessoa('Ana', 'Milano', 22);
const pessoa3 = criaPessoa('Jorge', 'Lutham', 75);
const pessoa4 = criaPessoa('Bianca', 'Ledesma', 30);
const pessoa5 = criaPessoa('Marco', 'Torres', 45);
console.log(pessoa3);
// exibiendo atributos dos objetos.
console.log(pessoa1.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa3.idade);
console.log(pessoa4.sobrenome);
console.log(pessoa5.nome);




