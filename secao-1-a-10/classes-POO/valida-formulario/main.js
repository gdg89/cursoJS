class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        //utilizamos uma função arrow para não perder o this, ja que a função arrow não permite alteração do this.
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e) {
        //preventDefault() impide que o formulario seja enviado.
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
            alert('formulario Enviado')
            this.formulario.submit();
        }

    }

    senhasSaoValidas(){
        let valid = true;
        
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            this.criaErro(senha, 'Campo Senha e Repetir Senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campo Senha e Repetir Senha precisam ser iguais.');
            valid = false;
        }
        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'A senha precisa ter entre 6 e 12 caracteres.');
            valid = false;
        }

        return valid;  
    }

    //Valida campos
    camposSaoValidos() {
        let valid = true;

        //remove msg de erro
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        };

        //valida campos
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo "${label.slice(0, -1)}" não pode estar em branco.`);
                valid = false;
            }

            //campo CPF
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            //campo Usuario
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras ou e/ou números.');
            valid = false;
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF invalido.');
            return false;
        }
        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        //inserta o elemento div ao final do elemento campo.
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();