
 alert('Esto es un alert');// exibe una mensaje, por padrão ela retorna undefined.
 const eleSabe =confirm('esto es un confrim, de acuerdo?');//Realiza un pregunta,Se usuario clica en ok, retorna true, senao retorna false.
 const  idade = prompt('Digite sua idade');//Solicita una informacion, y recibe los dados introducidos por el usuario.(os dados retornados sempre serão string.)

const num1 = parseFloat(prompt('Digite un numero'));
const num2 = parseFloat(prompt('Digite outro numero'));
//let resultado = parseFloat(num1) + parseFloat(num2);
let resultado = num1 + num2;
alert(`A souma deu: ${resultado}`);/* Na template string tambem pode pasar diretamente a expreção
                                     sem necesidade de criar uma nova variavel,
                                     exemplo ${num1 + num2}. Mas não é recomendavel em codigos mais complexos. */