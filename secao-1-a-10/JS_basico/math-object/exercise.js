// recuperando valor do prompt, modificando de string para number com o method Number.
const seuNumero = Number(prompt('Digite um numero'));

//imprimendo numero digitado pelo usuario no titulo.
const numeroTitulo = document.getElementById('title-number');
numeroTitulo.innerHTML = seuNumero;


const textosNumber = document.getElementById('texto');
// limpando placeholder
textosNumber.innerHTML='';

//imprimiendo texto
textosNumber.innerHTML += `<p>Raiz Quadrada: ${seuNumero ** 0.5}</p>`;
textosNumber.innerHTML += `<p>O numero é inteiro?: ${Number.isInteger(seuNumero)} </p>`;

//Forzando un NaN, multiplicando el numerio por una string.
textosNumber.innerHTML += `<p>O numero é NaN?: ${Number.isNaN(seuNumero * 'Olá')}</p>`;

textosNumber.innerHTML += `<p>Arredondando para baixo: ${Math.floor(seuNumero)}</p>`;
textosNumber.innerHTML += `<p>Arredondadno para cima: ${Math.ceil(seuNumero)}</p>`;
textosNumber.innerHTML += `<p>Com duas casa deciamis: ${seuNumero.toFixed(2)}</p>`;  
