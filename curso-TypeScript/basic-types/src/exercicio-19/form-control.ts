import isEmail from "validator/lib/isEmail";
const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function(event){
  event.preventDefault();
  hideErrorMessages(this);
  checkforEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPasswords(password, password2);
  if(shouldSenForm(this)) console.log('FORMulario Enviado');
});

function checkPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
 if(password.value !== password2.value){
  showErrorMessage(password, "As senhas deven ser iguais.")
  showErrorMessage(password2, "As senhas deven ser iguais.")
 }   
}

function checkEmail(email: HTMLInputElement): void {
  if (!isEmail(email.value)) showErrorMessage(email, 'Email invalido');
}

function checkforEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessage(input, "Campo não pode ficar vazio");
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(item => item.classList.remove(SHOW_ERROR_MESSAGES));
};

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSenForm(form:HTMLFormElement): boolean {
  let send =true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
  return send;
}
showErrorMessage(username, 'MESSAGEN');
hideErrorMessages(form);
