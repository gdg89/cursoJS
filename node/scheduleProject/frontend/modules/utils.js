export const msgError = (position, element, name, msg) =>{
    element.insertAdjacentHTML(position, `<p class="invalid-${name}" style="color:red; padding-top:5px;"> ${msg}</p>`);
}