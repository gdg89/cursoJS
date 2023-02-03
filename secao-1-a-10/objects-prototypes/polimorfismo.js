// POLIMORFISMO
/**
  MANEIRA QUE TEMOS DE FAZER METODOS SE COMPORTAREM DE MANEIRA DIFERENTE EM SUB-CLASSES(filhas de uma classe pai).

  CLASSE = FUNÇÃO CONSTRUTORA.

 */

  /**
   * Vamos fazer uma classe de conta bancaria e logo
   * especializar essa classe, para conta poupança e 
   * conta corrente.
   * cada conta tera um metodo "sacar", que vai se comportar de maneira diferente de acordo com a necesidade da conta em si.
   */

  //Na POO isso seria chamado Superclass

  //Superclass (função construtora)
  function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }

  //Criando metodos de agencia.
  Conta.prototype.sacar = function(valor){
    //verifica si saldo fose menor que o valor, exibira o saldo sem realizar a operação.
        if( valor > this.saldo){
            console.log(`Saldo insuficiente: R$${this.saldo}`);
            return;
        }
    //Caso o saldo seja maior do valor, resta valor do saldo.
    this.saldo -= valor;
    this.verSaldo();
    };

  Conta.prototype.depositar = function(valor){
    //soma valor ao saldo.
    this.saldo += valor;
    this.verSaldo();
  };


  Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} |` + 
    `Saldo: R$${this.saldo.toFixed(2)}`
    );

  };


  const conta1 = new Conta('01', 'EBG1568R86', 51324);
  conta1.verSaldo();
  conta1.depositar(10000);
  conta1.sacar(100000);

 
//Polimorfismo

/**Conta Corrente **/
function CC(agencia, conta, saldo, limite){
    //fazendo herança
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

// fazendo o link do prototype de Conta para CC
CC.prototype = Object.create(Conta.prototype);

//Retornando o constructor.
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    //verifica se o valor e maior que o saldo + o limite, exibira o saldo sem realizar a operação.
        if( valor > (this.saldo + this.limite)){
            console.log(`Esta exedendo o limite: R$${this.limite}`);
            return;
        }
    //Caso o saldo seja maior do valor, resta valor do saldo.
    this.saldo -= valor;
    this.verSaldo();
    };

const cc = new CC(122,"FD5455", 0, 150)
cc.depositar(100);
cc.sacar(251);

/**
 * Conta Poupança
 */

 function CP(agencia, conta, saldo, limite){
    //fazendo herança
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(12, 33, 0)

console.log();
cp.depositar(50);
cp.sacar(50);
cp.sacar(1);
