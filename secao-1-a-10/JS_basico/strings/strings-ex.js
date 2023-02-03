
//const nome = prompt('Digite seu nome completo: ');
const nome = 'Giuliano Daniel Garcia';
//Cuantas letras meu nome.
const letrasNome = nome.split(' ');
const nome1 = letrasNome[0].length;
const nome2 = letrasNome[1].length;
const sobnome = letrasNome[2].length;

const totaLetras = nome1 + nome2 + sobnome;

// Segunda letra do meu nome.
const segundaLetra = nome.charAt(1);

// Primeiro indice letra i
const primeiroIndice = nome.search(/i/);

// Ultimo indice letra i 
const ultimoIndice = nome.lastIndexOf('i');

//Ultimas 3 letras
//const tresUltimas = nome.match(/[a-z]/g);
const tresUltimas = nome.slice(-3);//-3 representa o inicio da onde vai contar.


// Cada palavra
const cadaPalavra = nome.split(' ');

// Uppercase
const nomeUpper = nome.toUpperCase();

//Lowercase
const nomeLower = nome.toLowerCase();




document.body.innerHTML += `Seu nome é: <strong>"${nome}"</strong><br>`;
document.body.innerHTML += `Seu nome tem: "${totaLetras}" letras.<br>`;
document.body.innerHTML += `A segunda letra do seu nome é: "${segundaLetra}"<br>`;
document.body.innerHTML +=`Qual o primeiro indice da letra "i" no seu nome? ${primeiroIndice}<br>`;
document.body.innerHTML += `Qual o ultimo indice da letra "i" no seu nome? ${ultimoIndice}<br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${tresUltimas}<br>`;
document.body.innerHTML += `As palavras do seu nome são: ${cadaPalavra}, <br>`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${nomeUpper} <br>`;
document.body.innerHTML += `Seu nome com letras minusculas ${nomeLower} <br>`;