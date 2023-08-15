import validator from 'validator';
import { msgError } from './utils';


function errorMessage(input, validationMessage) {
    const errorMsgElement = document.querySelector(`.invalid-${input.name}`);
    const errorMessage = validationMessage;

    if (errorMessage) {
        if (!errorMsgElement) {
            msgError('afterend', input, input.name, errorMessage);
        }
        return true;
    } else {
        if (errorMsgElement) errorMsgElement.remove();
        return false;
    }
}

function validateFields(formSelector, input, fieldValidators, password) {
    const value = input.value.trim();
    const fieldValidator = fieldValidators[input.name];
    if (!fieldValidator) throw new Error(`Validator not defined for field ${input.name}`);

    let validationMessage = '';

    if (formSelector === '.form-register' && input.name === 'passwordConfirm') {
       return validationMessage = fieldValidator(value, password);
    }else{
        return validationMessage = fieldValidator(value);
    }
    
    
}


export function formValidation(formSelector, fieldValidators) {
    const form = document.querySelector(formSelector);

    function validateForm(e) {
        e.preventDefault();
        const formFields = Array.from(form.querySelectorAll('.form-control'));
        let error = [];
        let password = '';

        formFields.forEach(field => {
            const input = form.querySelector(`input[name=${field.name}]`);
            if (!input) return;

            if(formSelector === '.form-register' && input.name === 'password') password = input.value;

            const validationMessage = validateFields(formSelector, input, fieldValidators, password);
            
            if (errorMessage(input, validationMessage)) {
                error.push(`${input.name} error`);
            }
        });

        if (error.length == 0) form.submit();
    }
    return {
        init() {
            if (!form) return;
            form.addEventListener('submit', validateForm);
        },
    }
}

//Fields Validators

export const loginValidator = {
    email: value => (validator.isEmail(value) ? '' : 'Invalid Email'),
    password: value => (value.length < 6 || value.length > 50 ? 'Invalid Password' : '')
}

export const registerValidator = {
    email: value => (validator.isEmail(value) ? '' : 'Invalid Email'),
    password: value => (value.length < 6 || value.length > 50 ? 'Invalid Password' : ''),
    passwordConfirm: (value, passwordValue) =>  value !== passwordValue ? 'Passwords do not match' : '',
}

//This Validator is valid for newContact form and editContact form
export const newContactValidator = {
    name: value => (value.length < 3 ? 'Name must contain at least 3 characters.' : ''),
    lastName: value => (value.length < 3 ? 'Last name must contain at least 3 characters.' : ''),
    phone: value => (/^\d+$/.test(value) ? '' : 'Phone should be numbers only.'),
    email: value => (validator.isEmail(value) ? '' : 'Invalid Email'),
};
