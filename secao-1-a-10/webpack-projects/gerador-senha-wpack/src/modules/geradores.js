// Os caracteres são gerados com base na tabela ASCII

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

//geradores usando String.fromCharcode(codigo do caracter)
//como a função não tem emconta o ultimo numero vamos adicionar mais um no max, por exemplo se os caracteres maiusculas vão ate 90, vampos por 91.

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.!@#$%&*()+=-';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(quantidade, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];
    quantidade = Number(quantidade);

    for(let i = 0; i < quantidade; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolos());
    }
    return senhaArray.join('').slice(0, quantidade);
}