export class Login{
    constructor(form){
        this.form = document.querySelector(form);
    }

    init(){
       this.events(); 
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e =>{
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        console.log(emailInput.value, passwordInput.value);
    }

}