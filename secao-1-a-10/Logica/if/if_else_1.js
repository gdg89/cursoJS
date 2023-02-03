/**
 * Entre 0 - 11 - bomdia
 * Entre 12 - 17 - Boa Tarde
 * Entre 18 - 23 - Boa noite
 * 
 */
 
// O if pode ser usado sozinho.
// O else sempre e precedido de um if.
// Poso ter quantos else ifs forem necesarios.


const hora = 19;

if (hora >= 0 && hora <= 11){
    console.log('Bom Dia');
}else if(hora >= 12 && hora <= 17){
    console.log('Boa Tarde');
}else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite')
}else{
    console.log('Olá');
}