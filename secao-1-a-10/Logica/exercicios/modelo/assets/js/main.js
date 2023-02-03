// Capturar evento de submit do formulario.
const formEvent = document.querySelector('.form');

// funcao principal, do evento submit.- (e)= event.
formEvent.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');//capturando inpt
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // condicional se peso nao for valido.
    if (!peso){
        setResultado('Peso invalido', false);
        return;//deixa de ejcutar a função,
    }
    if (!altura){
        setResultado('Altura invalida', false);
        return;//deixa de ejcutar a função,
    }

    //calcula IMC
    const imc = getImc(peso, altura);// calcula imc
    const nivelImc = getNivelImc(imc);//clasifica no nivel correspondiente.

    const msg = `Seu IMC é ${imc} ${nivelImc}`;

    setResultado(msg, true);
    console.log(imc, nivelImc);
});



//calcula imc
function getImc(peso, altura){
   const imc = peso/(altura * altura);
    return imc.toFixed(2);
}

//condicional para os niveis de ovecidade
function getNivelImc(imc){
    const nivel = [
        'Abaixo do peso', 
        'Peso Normal', 
        'Sobrepeso', 
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ];
    
    //JS permite não colocar blocos {} cuando os if sao muito pequenos.
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}


 //creando  paragrafo damessagem.
function criaP(){
    const p = document.createElement('p');
    return p;
}

// Exibiendo mesage de resultado.
function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');//selecionando div que exibe resultado pela class 'resultado'.
    resultado.innerHTML = '';// cerando o elemento.
    
    const paragrafo = criaP();

    //condicional validando dados ingresados.
    if (isValid){
        paragrafo.classList.add('paragrafo-resultado');// se dados sao valido, exibe resultado aplicando a class 'paragrafo-resultado'.
    }else{
        paragrafo.classList.add('bad');//se dados são incorretos aplica a class 'bad'.
    }

    paragrafo.innerHTML = msg;//pasando messagem pro paragrafo.
    resultado.appendChild(paragrafo);//insirindo elemento na div.

}

