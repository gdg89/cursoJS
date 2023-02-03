function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.clickBotoes();
        this.clearDisplay();
        this.pressEnter();
    };



    this.clickBotoes = () => {
        document.addEventListener('click', (e) => {
            const elemento = e.target;

            if (elemento.classList.contains('btn-num')) this.btnParaDisplay(elemento.innerText);
            if (elemento.classList.contains('btn-clear')) this.clearDisplay();
            if (elemento.classList.contains('btn-dell')) this.apagaUm();
            if (elemento.classList.contains('btn-eq')) this.realizaConta();

        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            if (!conta) {
                alert('conta invalida');
                return
            }
            this.display.value = conta;
        } catch (e) {
            alert('conta invalida');
            return
        }

    }

    this.pressEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

}

const calculadora = new Calculadora();

calculadora.inicia();