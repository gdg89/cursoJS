/**
 * fonções contrutora, igual que  as funcções factory retornam
 * um objeto.
 *   
 *  Na função construtora precissa sempre iniciar com amyuscula.
 *  Para utilizar ela utilizar a palvra new.
 * 
 *  A palavra new cria um objeto vacio e faz apontar a palvra
 *  this para o objeto vacio e retorna o objeto para a variavel.
 * */

//criando construct function

function Pessoa (nome, sobrenome) {
    //atributos privados(estão disponivels unicamente no corpo da função)
    const id = '12d51fe';
    const metodoPrivado = () => {
        // exemplo validar cpf.
    };

    //criando chaves - this == Pessoa.
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log('sou um metodo criado com arrow function pelo: ' + this.nome, this.sobrenome);
    }
}

//utilizando 
const p1 = new Pessoa('Graziela', 'Barreto');
const p2 = new Pessoa('Giuiliano', 'García');
console.log(p1);
console.log(p2);
p2.metodo();


