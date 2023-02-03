/**
 * São funções que retornam objetos.
 */

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');// split separa uma string pelo caracter selecionado, nesse caso um espacio. Retorna um array.
            this.nome = valor.shift();//shift retorna el primero valor del array y lo retorna a la variavel.
            this.sobrenome = valor.join();// join junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
            //Nesse caso this faz referença ao elemento que esta chamando a função.
        },
        altura: altura,
        peso: peso,
        //Getter 
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Fulano', 'Detal', 1.80, 80);
const p2 = criaPessoa('Maria', 'Malandra', 1.75, 70);
p1.nomeCompleto = 'Giuliano García Romero';
console.log(p1.fala('falando coisas'));// Nesse caso this faz referença a p1.
console.log(p1.imc);// por imc ter get, acceso aos valores como se fose um atributo e não um metodo.
console.log(p2.fala('pulando aranhas!'));//nesse caso this faz referença a p2.
console.log(p2.imc);// por imc ter get, acceso aos valores como se fose um atributo e não um metodo.
console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto);


