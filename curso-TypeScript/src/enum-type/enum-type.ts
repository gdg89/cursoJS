// O tipo 'enum' é uma estrutura que permite definir um conjunto de constantes
// nomeadas com valores asociados, tornando mais facil trabalhar com valores
//simbolicos em vez de usar numeros ou strings diretamente.

// enum numerico
enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO, //2
}

enum Cores2 {
  VERMELHO = 2, //2
  AZUL, //3
  AMARELO, //4
  ROXO = 'Roxo',
  VERDE = 120, //PRECISA ser inicializado nuvamente para seguir un conteo
  ROSA, // 121
}

//fazendo merge com Cores2
enum Cores2 {
  LEMES = 122, //122
  MIRNO, //123
  CHECA = 'TEST', //TEST
}

console.log('enum Cores :', Cores);
console.log('enum Cores2 :', Cores2);

console.log('###############');

console.log('Valores:', Cores.VERMELHO); //0
console.log('Valores:', Cores2[3]); //AZUL
console.log('Valores:', Cores2.ROXO); //'Roxo'

//usando enum como tipo
function escolhaACor(cor: keyof typeof Cores2): void {
  console.log('Escolhou a cor: ', Cores2[cor]);
}

escolhaACor('ROXO'); //'Roxo'
