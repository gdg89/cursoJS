
//Arredondando pra baixo - Math.floor()
let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num2);

//Arredondando pra cima - Math.ceil()
let numX = 4.63846;
let numZ = Math.ceil(numX);
console.log(numZ);

// Arredondando pro mais proximo - Math.round()
let numA = 13.6398;
let numB = 8.2135;
let numArounded = Math.round(numA);
let numBrounded = Math.round(numB);

console.log(numArounded);
console.log(numBrounded);

//Recuperando maior numero de uma secuencia - Math.max()
console.log(Math.max(12,5,846,8,4,84,-1,-5,335,159,1658,-84));

//Recuperando menor numero de uma secuencia - Math.min()
console.log(Math.min(12,5,846,8,4,84,-1,-5,335,159,1658,-84));

//Gerando numeros aleatorios entre 0 e 1 (1 nunca sera exibido)
const aleatorio = Math.random();
console.log(aleatorio);

//Gerando numero aleatorios entre 2 numeros especificados(nesse caso 8 e 3);
const numAleatorio = Math.random() * (8-3) + 3;// formula para valores entre un max e um min: (max - min) + min.
console.log(numAleatorio);

//recuperando valor de PI
console.log(Math.PI);

//potenciacion con Math.
console.log(Math.pow(2,10));

// Potenciacion con operador.
console.log(2 ** 10);