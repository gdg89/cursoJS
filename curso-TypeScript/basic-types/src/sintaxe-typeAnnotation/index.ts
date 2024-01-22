/* eslint-disable */

//Tipos basicos (aqui ocorre inferência de tipos)
let nome: string = 'Something'; // qualquer tipo de strings: '' "" ``
let idade: number = 30; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
//let big: bigint = 10n; // bigint

//Arrays 
let numberArray: Array<number> = [1, 2, 3];
let numberArray2: number[] = [1, 2, 3];

let stringArray: Array<string> = ['a', 'b', 'c'];
let stringArray2: string[] = ['a', 'b', 'c'];

//Objetos
                                          //? indica opcional
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Mirlo'
};

//Funções
function soma (x: number, y: number): number {
  return x + y;
}
const result = soma(2, 2);

const soma2 : (x: number, y: number) => number = (x, y) => x + y;
