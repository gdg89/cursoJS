// let a = 'A';//B
// let b = 'B';//C
// let c = 'C';//A

// //desestruturação = array
// const newLetters = ['B', 'C', 'A'];
// [a, b, c] = newLetters;
// console.log(a, b, c);

// ... - de nome rest para pegar o resto de alguma coisa 
// ... - de nome spread para disribuir.

const numeros = [1121, 246, 389, 4156, 5123, 6521, 778, 862, 932];

const[primeiroNumero, segundoNumero, ...resto] = numeros;// operador rest(...) recebe o resto do array que não foi pego

console.log(primeiroNumero, segundoNumero, resto);

//pegando valores alternados 
const [um, , ,quatro, , , sete, , nove] = numeros;
console.log(um,quatro,sete,nove);

// arrays de arrays 

const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numbers[1][2], numbers[0][1], numbers[2][0]);
