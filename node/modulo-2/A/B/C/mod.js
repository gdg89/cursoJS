module.exports = function(x, y){
    return x * y;
};

/**
 * - o module.exports foi reseteado com o valor da  funçao anonima, tambem pode ser qualquer outro valor(numero, string, class, etc). Ele vai exportar ese valor como default ao impor o modulo sem especificar a chave.
 * 
 */

const soma = (x, y) =>{
    return x + y;
}

module.exports.soma = soma;

class Cachorro{
    constructor(nome){
        this.nome = nome;
    }
    latir(){
        console.log(`${this.nome} está faxendo au au au!!!`);
    }
}

module.exports.cachorro = Cachorro;


