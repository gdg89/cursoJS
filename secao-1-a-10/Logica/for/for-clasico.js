// i - index
for(i = 0; i <= 5; i++){
    //console.log(`linha ${i}`);
}

// multiplo de 2 
for(i = 0; i <= 20; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
   //console.log(i, par);
}

// Percorrendo array
const frutas = ['banana', 'maçã', 'linguiça', 'morango', 'pera'];

for(i = 0; i < frutas.length; i++){
    console.log(`Indice ${i}`,frutas[i]);
}