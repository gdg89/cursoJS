
/* 
  Luiz Otavio Miranda tem 30 AnalyserNode, pesa 84 kg
  tem 1.8 de altura e seu IMC é de 25.925925925925924.
  Luiz Otavio nacseu em 1900.
*/

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 90; 
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;


imc = peso / (altura * altura);
anoNascimento = 2022 - 30;

/*
  Concatenando Variaveis com Strings.
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos de idade e pesa ' + peso + ' kg.',
    'Tem ' + altura + ' m de altura e seu IMC é de ' + imc +'.' + 
     nome + ' nacseu em ' + anoNascimento);
*/


// Template strings : String que permite colocar variaveis dentro da string, nesse formato ${nomeVariavel}, e a string debe estar entre crases `` , e não entre aspas '' .
console.log(`${nome} ${sobrenome} tem ${idade} anos de idade, e pesa ${peso} kg. Tem ${altura}m de altura e seu IMC é de ${imc}.`)  
console.log(`${nome} ${sobrenome} nacseu em ${anoNascimento}.`);



