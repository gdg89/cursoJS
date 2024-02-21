/**
 * Pego o tipo de coresObj inferido pelo TS usando o typeof.
 * E pego as chaves usando keyof.
 */

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function colorTranslate(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(colorTranslate('vermelho', coresObj));
console.log(colorTranslate('verde', coresObj));
console.log(colorTranslate('azul', coresObj));
console.log(colorTranslate('roxo', coresObj));
