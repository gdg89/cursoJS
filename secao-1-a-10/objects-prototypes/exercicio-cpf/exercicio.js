// validando CPF

/*
705.484.450-52 070.987.720-03 111.111.111-11

Para calcular o primero digito apos -, (5)
debo multiplicar cada numero do primeros 9, em uma secuencia regresiva começando do 10.
Sumamos os resultados, e o resto da daivisão entre o resultado da suma e 11, va ser restado de 11.
Caso o resultado da resta seja  maior do que 9, o valor do digito pasa a ser 0.

Para calcular o segundo digito se repite a secuencia, só que dessa vez vamos incorporar o primerio digito e  a secuencia regresiva vai começãr do 11.

//PRIMEIRO DIGITO:
7x 0x 5x 4x 8x 4x 4x 5x 0x 
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5(primeiro digito).

//SEGUNDO DIGITO:
7x 0x 5x 4x 8x 4x 4x 5x 0x 5X
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (segundo digito)

 Dicas:
 Preciso receber o cpf  como uma string.
 limpar os pontos e trazo com expreção regular.
*/

let newCPF = '705.484.450-52';
//let cpfClear = cpf.replace(/\D+/g, ''); // tudo o que não for um numero vai ser sustituido por nada.
//const cpfArray = Array.from(cpfClear); // converte em array a string do cpf.

//console.log(cpfArray.map(el => el));//percorrendo array.


//const cpfClear = cpf.replace(/\D+/g, '');
//const cpfArray = Array.from(cpfClear);


function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'clearCPF', {
        enumerable:true,
        get: function(){
            //retira qualquer caracter que não seja numero.
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function(){
    //verifica CPF pasado, caso undefined ou não contenha quantidade certa de carateres, cancela validação.
    if(typeof this.clearCPF === 'undefined') return false;
    if(this.clearCPF.length !== 11) return false;
    if(this.isSequencia())return false;

    //retira ultimos 2 digitos.
    const cpfParcial = this.clearCPF.slice(0, -2);

    //cria digito 1, a partir do cpfParcial criado acima.
    const digito1 = this.criaDigito(cpfParcial); 
    //cria digito 2
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    console.log('Novo CPF: ',novoCpf);
    
    
    return novoCpf === this.clearCPF;
};



ValidaCPF.prototype.criaDigito = function(cpfParcial){
    //converte string recibida em array
    const cpfArray = Array.from(cpfParcial);
    
    //cria contador regresivo
    let regresivo = cpfArray.length + 1;

    //retorna a suma de cada numero do CPF multiplicado pelo cotador regresivo.
    const total = cpfArray.reduce((acum, value) => {
       acum += regresivo * Number(value);
       regresivo--;
       return acum; 
    }, 0)

    //realiza o calculo final para achar o digito.
    const digito = 11 - (total % 11);
    //ternario verifia se digito maior que 9 retorna 0.
    return digito > 9 ? '0' : String(digito);
    
};

ValidaCPF.prototype.isSequencia = function(){
    // validando que o CPF pasado não seja uma sequencia tipo 111.111.111-11
    const sequencia = this.clearCPF[0].repeat(this.clearCPF.length);
    return sequencia === this.clearCPF;
}



const cpf = new ValidaCPF('705.484.450-52');


if(cpf.valida()){
    console.log('CPF valido');
}else{
    console.log('CPF invalido');
}