/**
 * Functions Overload (sobrecarga de funções):
 *
 *  A sobrecarga de funções permite definir várias assinatura
 *  para a mesma função. Isso significa que você pode ter
 *  diferentes versões da mesma função que  aceitam diferentes
 *  tipos de parâmetros ou numeros diferentes de parâmetros.
 *  Quando você chama essa função o TypeScript seleciona
 *  automaticamente a versão correta com base nos tipos ou na
 *  quantidade de parâmetros que você pasa para ela. Isso ajuda
 *  a melhorar a legibilidade do codigo e a fornecer uma
 *  interface mais flexivel para os usuarios da função.
 *
 */

//aqui defino todas as opções que eu espero receber na minha função.
type Adder = {
  (x: number): number;
  (x: number, y?: number): number;
  (...arg: number[]): number;
};

//A seguir vou fazer type guard para verificar quais parametros recebi, e realizar a soma correspondiente.
const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  // como y pode ser undefined ou null, tratando o valor com o operador logico ||.
  return x + (y || 0);
};

//Overload é simplesmente fazer uma função se comportar de maneira diferente dependendo dos argumentos que recebe.
console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 5));
