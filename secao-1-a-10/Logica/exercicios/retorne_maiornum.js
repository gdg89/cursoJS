// Escreva uma função que recebe 2 numero e retorne o maior deles.


function maiorNumero(num1, num2){
    // Utilizando MATH
    // const resultado = Math.max(num1,num2);
    // console.log(resultado);
    

    //Utilizando if
    //if(num1 > num2) return num1;
    //return num2;
   

    //Utilizando ternario
    return num1 > num2 ? num1 : num2;



}
console.log(maiorNumero(35, 12));

// Com arrow function e ternario.
const max = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(max(165, 235));