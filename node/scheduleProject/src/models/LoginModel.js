const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

//Configura model
const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        //recebe o body(campos) do formulario
        this.body = body;
        //verifica se pode criar usuario ou tem um error
        this.errors = [];
        this.user = null;
    }

    //metodos
    async login() {
        this.valida();
        if (this.errors.length > 0) return;

        //cheka se usuario existe
        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.errors.push('Usuario ou senha invalidos.');
            return;
        }

        //cheka senha, pasando senha inserida no body, e pasando senha do banco de dados(user)
        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('Usuario ou senha invalidos.');
            this.user = null;//resetando usuario por segurança
            return;
        }

    }

    //sempre que realizar operação na base de dados vou trabalhar com promises
    async newRegister() {
        this.valida();
        //checkando se não tiver errors
        if (this.errors.length > 0) return;

        //checka se usuario existe na DB
        await this.userExist();
        //debo checkar novamente apos checajem de usuario na DB
        if (this.errors.length > 0) return;

        //hash de senha
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        //registrar na base de dados e atribuida na tag user.
        this.user = await LoginModel.create(this.body);
    }

    //checka se usuario existe na DB
    async userExist() {
         this.user = await LoginModel.findOne({ email: this.body.email });

        if (this.user) this.errors.push('Usuario já existe');
    }
    //valida se dados são corretos para cadastrar usuario.
    valida() {
        this.cleanUp();
        //validações com validator

        //email
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail invalido');

        //password (3 to 50 chracters)
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres');
        }

        // if (this.body.passwordConfirm !== this.body.password) {
        //     this.errors.push('As senhas devem ser iguais');
        // }

    }

    //valida que tudo o que esta no body seja uma string.
    cleanUp() {
        for (const key in this.body) {
            //caso valor do campo não seja uma string, converte ele numa string vacia.
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password,
            passwordConfirm: this.body.passwordConfirm
        }
    }
}

module.exports = Login;