/**
 * FUNCTION FACTORY + PROTOTYPE
 */

/*
  Compor um objeto com varios outros objetos se chama de composição.
  Esse tipo de composição criado aqui tem nome de mixing.
*/
const falar = {
    fala() {
        console.log(`${this.nome} está falando`);
    },
};

const comer = {
    come() {
        console.log(`${this.nome} ${this.sobrenome} está comendo`);
    },
};


const beber = {
    bebe() {
        console.log(`${this.sobrenome} está bebendo`);
    },
};


//definiendo o prototype do criaPeassoa.
/**Opção 1 */
//const pessoaPrototype = {...falar, ...comer, ...beber};
/*Opção 2 */
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    // o primeiro parametro do Object.create define o prototype do novo objeto, o segundo parametro define as prperties.
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Giuliano', 'Garcia');
const p2 = criaPessoa('Graziela', 'Barreto');