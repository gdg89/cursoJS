// factory function
function criaCalculadora() {
  //objeto com os methodos 
  return {
    display: document.querySelector('.display'),//recupera info do display.

   //inicia la calculadora llamando os methodos.
    inicia() {
      this.cliqueBotoes();
      this.clearDisplay();
      this.pressionaEnter();
    },

    //botoes ação.
    cliqueBotoes() {
      document.addEventListener('click', (e) => {//arrow function mantiene el this original.
        const el = e.target;//recuperando elemento clicado.

        // botoes num e operadores
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);//imprimendo texto do botao no display
        }
        //botão do clear
        if(el.classList.contains('btn-clear')){
          this.clearDisplay();//limpando display
        }

        //botão backspace
        if(el.classList.contains('btn-dell')){
          this.apagaUm();//apaga o ultimo caracter ao clicar no botaõ backspace.
        }

        //botão igual
        if(el.classList.contains('btn-eq')){
          this.realizaConta();// realiza a conta quando clicar no botão = . 
        }

      });
    },
    
    //Imprime valores dos botoes no display.
    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    //Limpa display
    clearDisplay(){
      this.display.value = '';
    },

    //btn apaga um
    apagaUm(){
      this.display.value = this.display.value.slice(0, -1)//slice retira elimina 1 da string.
    },

    // realiza conta - btn igual
    realizaConta(){
      let conta = this.display.value;

      try{
        conta = eval(conta);//realiza conta - eval executa scripts por isso é perigoso.
        if(!conta){
          alert('conta invalida');// se nao tiver conta exibe message de erro.

          return
        }
        this.display.value = conta;//exive resultado
      }catch(e){
        alert('conta invalida');
        return
      }
    },

    //realiza conta com tecla enter.
    pressionaEnter(){
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13){
          this.realizaConta();
        }
      });
    }

  }
}
const calculadora = criaCalculadora();
calculadora.inicia();