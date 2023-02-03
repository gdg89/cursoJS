import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const quantidade = document.querySelector('.qtd-caracteres');
const maiusculas = document.querySelector('.chk-maiusculas');
const minusculas = document.querySelector('.chk-minusculas');
const numeros = document.querySelector('.chk-numeros');
const simbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.btn-gera-senha')



export default () => {
    gerarSenha.addEventListener('click', () =>{
         senhaGerada.innerText = gera();
    });
};

function gera(){
    const senha = geraSenha(
        quantidade.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked
    );
    return senha || 'Nada Selecionado.';
}

