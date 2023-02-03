/**
 * As classes são, na verdade, "funções especiais" e, assim como você pode definir expressões de função e declarações de função, a sintaxe de classe tem dois componentes:expressões de classe e declarações de classe.
 */


//Declaração de classe
class Pessoa{
    //caso presisar pasar parametros utilizamos o siguiente metodo:
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //adicionando metodos (eles serão atrelados ao prototype automaticamente).
    falar(){
        console.log(`${this.nome} está falando`);
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
}

//instanciando uma pessoa
const p1 = new Pessoa('Giuliano', 'Garcia');
const p2 = new Pessoa('Diego', 'Alonso');
const p3 = new Pessoa('Marcos', 'Tagglianni');
const p4 = new Pessoa('Rino', 'Bomgarddi');
/**
 * Nenhuma dessas pessoas criou os metodos novamente, todas elas usaram o metodo pai.
 */
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);


/**
 * ===================================
 * Como seria com função contstrtutora
 * ====================================
 * 
 */


function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// o metodo deberia ser pasado no prototype, para não ser criado cada vez que instanciar.

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando, criado com função contrutora`);
};

const pessoa2 = new Pessoa2('Anicloris', 'Servantes');
