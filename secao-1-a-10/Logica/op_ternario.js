//  ? :

const pontuacaoUsuario = 999;


// Condição: se usuario tiver mas de 1000pts é vip
// se não é usuario standard.


// expressão if
if(pontuacaoUsuario >= 1000){
    console.log('Usuario VIP');
}else{
    console.log('Usuario padrão');
}

//expressão Ternaira
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario Padrão";
console.log(nivelUsuario);