/*
Em TypeScript, um literal type é um tipo que representa um valor 
específico, em oposição a um conjunto mais amplo de valores. 
Isso significa que você pode declarar um tipo que aceita somente 
valores literais específicos.

Por exemplo:

let status: "ativo" | "inativo";

Nesse caso, status só pode ser atribuído a duas strings 
específicas: "ativo" ou "inativo". Literal types são úteis para 
restringir os valores possíveis que uma variável pode ter, 
tornando o código mais claro e evitando erros. Eles são 
comumente usados em uniões de tipos para definir conjuntos 
específicos de valores que uma variável pode assumir.
*/

//mais exemplos:

// no caso de const tem o tipo literal assignado, o seja
// z é type 100, 100 seria um subtipo de number, e z não pode receber nenhum outro valor que não seja 100.

const z = 100;//eslint-disable-line


//no caso de let o  typo seria number,  pudendo mudar para
//qualquer valor do typo number.
let x = 10;//eslint-disable-line

//usando literal-type
let a: 120 = 120; //eslint-disable-line
a = 100; // a é type 120, então não pode ser 100.

//a maneira certa de se fazer(ver exemplo com chaves de objeto mas em baixo):
let b = 100 as const;// eslint-disable-line

// exemplo com objeto:

const person = {
  nome: 'Giuliano' as const, //o type de nome sera unicamene Giu.. não pode receber nenhum outro valor.
  sobrenome: 'García',
};
person.nome = 'ana'; // isso não é possivel

//Combinando literal com union-type, obtemos baicamente o enum,
// mas com a tipagem segura.

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'));

//console.log(escolhaCor('')); mesmo retornando uma string, da erro, pos o cor deve ser um dos type literal assignados
