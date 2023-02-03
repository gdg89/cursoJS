/*
  JavaScrip é baseado em protótipos para passar propiedades
  e métodos de um objeto para outro.


  Definição de Prototypes:
  ***********
   Protótipo é o termo usado para se referir ao que foi criado pela
   primeira vez, servindo de modelo ou molde para futuras produções.

   Todos os objetos tem uma referência interna para um portótipo(__proto__)
   que vem da propriedade prototype da função construtora que foi usada para
   criá-lo. Quando tentamos accesar um membro de um objeto, primeiro o motor
   do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
   de prototipos é usada até o topo(null) até encontrar (ou não) tal membro.


   -INSTANCIA: a instanciação é um proceso por meio do qual se
    realiza a copia de um objeto(classe) existente.

    Performance:
    *************
    Criar um metodo dentro do prototype melhora a performance, já que 
    cada novo objeto que criar, nao precisa criar um novo metodo/propiedade, eles simplesmente tomarão como referença o metodo/propiedade da função construtora.
 */



//Construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//pasando metodo dentro do prototype
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

//instancia
const pessoa1 = new Pessoa('Anibal', 'Sampayo');// <- Pessoa = Função construtora.
const data = new Date();//<- Date = Função construtora.

console.log(pessoa1);
console.log(data.toLocaleString());


//referença __proto_ do objeto vem da propriedade prototype da função construtora.
console.log(Pessoa.prototype === pessoa1.__proto__);//true