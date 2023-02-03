const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('CONTINUE COM FOR')
//CONTINUE
for (let numero of numeros){
    if(numero === 2 || numero === 8){
        console.log('Pulei um numero... kkk')
        continue;// o continue vai pular o codigo que esta a continuação dele. nesse caso o console.log(numero).
    }

    console.log(numero);
}
console.log('###################')
console.log('BREAK COM FOR')
//BREAK
for (let number of numeros){
    if(number === 7){
        console.log('Achei o numero', number, '!');
        break;// o break interrompe o laço apos a condição ser verdadeira.
    }
    console.log(number);
}
console.log('#################')
// CONTINUE & BREAK COM WHILE
console.log('CONTINUE & BREAK COM WHILE')
i = 0
while (i < numeros.length){
    let numb = numeros[i];

    if (numb === 2){
        console.log('Pulei o numero 2... kkk');
        i++;//el contador debe ir antes do continue para nao gerar um loop infinito.
        continue;
    }

    if(numb === 7){
        console.log('Achei u numero 7 ... tó fora!');
        i++;
        break;
    }
    console.log(numb);
    i++; //não esquecer do contador para não gerar um loop infinito.
} 