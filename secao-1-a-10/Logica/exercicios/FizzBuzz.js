/**
 * Ecreva uma função que recebe um numero e
 * retorne o siguiente:
 * Num é divisível por 3 = Fizz
 * Num é divisível por 5 = Buzz
 * Num é divisível por 3 e 5 = FizzBuzz
 * Num não é divisível por 3  e  5 = Retprna o propio numero.
 * 
 * Checar se o numero é tipo number
 * Use a função com numero de 0 a 100.
 */

function fizzBuzz(num){

    if(typeof(num) === 'number'){
        if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
        if(num % 5 === 0) return 'Buzz';
        if(num % 3 === 0) return 'Fizz';
        return num;
    }
       
    return NaN;
}

for (let i = 0; i < 100 ; i++){
    console.log(fizzBuzz(i));
}
