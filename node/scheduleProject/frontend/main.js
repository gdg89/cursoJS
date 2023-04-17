import "core-js/stable";
import "regenerator-runtime";

import {Login }from './modules/formsValidation';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";


// remove flash message
(function removeFlashMsg() {
    const flashMessage = document.querySelector('.alert');
    if (flashMessage) {
        setTimeout(() => {
            flashMessage.remove();
        }, 2000);
    }
})();

const login = new Login('.form-login');
login.init();

