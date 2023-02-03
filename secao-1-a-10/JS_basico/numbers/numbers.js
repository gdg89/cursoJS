//Padrão IEEE 754-2008

let num1 = 10.54626548326;//number
let num2 = 2.5;// number

//Vendo IMPRESIÇÃO decimal do JS
let impr1 = 0.7;
let impr2 = 0.1;

impr1 += impr2; // 0.8
impr1 += impr2; // 0.9
impr1 += impr2; // 1.0
impr1 += impr2; // 1.1
impr1 += impr2; // 1.2
impr1 += impr2; // 1.3
impr1 += impr2; // 1.4
impr1 += impr2; // 1.5
impr1 += impr2; // 1.6
impr1 += impr2; // 1.7
impr1 += impr2; // 1.8
impr1 += impr2; // 1.9
impr1 += impr2; // 2.0
console.log(impr1);// retorna 2.0000000000000004


impr1 = Number(impr1.toFixed(2));
console.log(impr1);// retorna 2

//O tipo de num1 muda temporariamente  pra uma string.
console.log(num1.toString() + num2);

//Exibira el binaro del valor de num1.
console.log(num1.toString(2));

// Modifica permanentemente el tipo del valor de num1.
//num1 = num1.toString();

// Exibe tipo de dado.
console.log(typeof num1);

//declara quantas casas decimales seran exibidas.(la variable mantiene las casas orignales)
console.log(num1.toFixed(2));//mão aplica em tpye strings.

//Confere o tipo de numero da variavel, retornando true or false.
console.log(Number.isInteger(num1));//retorna false, num1 no es typo integer.

let temp = num1 * 'Olá';//essa conta retorna NaN, ya que não é possivel operar com strings.
console.log(Number.isNaN(temp));// retorna true, dado que a conta de cima reorna NaN.
