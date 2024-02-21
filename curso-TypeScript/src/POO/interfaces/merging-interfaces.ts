//Declaration Merging

/**
 * Tentar ter um tpye alias e um interface com o mesmo nome gerará um erro.
 * Mas é Possivel ter duas interfaces com o mesmo nome, elas serao mergeadas.
 */

// @ts-ignore
type Pessoa = {
  nome: string;
};
// @ts-ignore
interface Pessoa {
  sobrenome: string;
}

interface Salada {
  tomate: string;
}

interface Salada {
  readonly alface?: string; // a seguinte propiedade é opcional, mas se existir ela será readonly.
  //caso tenha um array e precise que seja read only a
  // propiedade e o array tem que ser assim :
  readonly molhos: readonly string[];
  readonly sobremesa: string[];
}

const newSalad: Salada = {
  tomate: 'Cherry',
  alface: 'Crespa',
  molhos: ['Cesar'],
  sobremesa: ['banoffi'],
};

newSalad.sobremesa.push('brownie'); // não da erro mesmo a propiedade sendo readonly, o array não é.
//@ts-ignore
newSalad.molhos.push('Mostarda Dijon'); // vai dar erro
console.log(newSalad);
console.log(newSalad.molhos);
console.log(newSalad.sobremesa);
