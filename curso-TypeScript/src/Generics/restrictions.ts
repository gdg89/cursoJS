/**
 * No contexto de tipos genéricos, você pode aplicar restrições
 * para limitar quais tipos podem ser passados como argumentos
 * para o tipo genérico. Essas restrições são expressas usando a
 * palavra-chave extends seguida pelo tipo ou conjunto de tipos
 * permitidos.
 *
 */

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rojo',
  vacinas: ['VNl23', 'LRD294'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
