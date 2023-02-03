const frutas = ['banana','maçã','uva','kiwi'];
const pessoa = {
    nome: 'Franco',
    sobrenome: 'Alfonso',
    idade: 34
};



/* Iterando array com for in
=========================*/
//ele retorna o indice, para ver o valor precisa fazer frutas[i].
for(let i in frutas){
    
    console.log(i, frutas[i]);
}


/**
 * Iterando Objeto com for in
 * ==============================
 */
for(let chave in pessoa){
    console.log(chave, pessoa[chave]);//pessoa[chave] accesa ao valor da chave do objeto
}