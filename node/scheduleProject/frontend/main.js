import "core-js/stable";
import "regenerator-runtime";

import { formValidation, loginValidator, newContactValidator, registerValidator }from './modules/formsValidation';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";


// remove flash message
(function removeFlashMsg() {
    const flashMessage = document.querySelector('.alert');
    if (flashMessage) {
        setTimeout(() => {
            flashMessage.remove();
        }, 2500);
    }
})();



//forms validation

const loginForm = formValidation('.form-login', loginValidator);
loginForm.init();

const registerForm = formValidation('.form-register', registerValidator);
registerForm.init();

const addContactForm = formValidation('.form-newContact', newContactValidator);
addContactForm.init();

const editContactForm = formValidation('.form-editContact', newContactValidator);
editContactForm.init();

