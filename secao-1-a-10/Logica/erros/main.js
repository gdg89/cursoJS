
// TRAY CATCH FINALLY

try{
    // É executada quando não há erros
}catch (e){
    // É executada quando há erros
}finally{
    // Sempe é executada.
}

//tratamento do erro
//try captura o erro, e catch  trata ele.
//O parametro do catch(e) é o valor do throw.
//nunca exibir o erro  pro usuario final.
console.log('##########################');
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');//EXEÇÃO THROW
    }
    return x + y;
}

try {
    console.log(soma(2, 5));
    console.log(soma('2', 5));
}catch(error){
    console.log(error);
}

console.log('##########################');
// Exemplo com finally
 try{
    console.log(a);//a nao foi declarada, entao vai dar erro.
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
 }catch (e){
    console.log('Tratando erro');
 }finally{
    console.log('Finally - Eu sempre sou executado.');
 }
 console.log('##########################');
 //É possivel aninhar os try
 try {
    console.log('aqui não tem erro');// se tiver erro nao se executa o try aninhado e vai direito pro catch pai.
    try{
        console.log(a,'aqui tambem não');// se tiveer erro se executa catch aninhado e os dois finally.
    }catch (e){
        console.log('Sou catch aninhado');
    }finally{
        console.log('Sou finally aninhado');// sera executado unicamente se o try aninhado é executado. Independente se tiver erro ou não
    }
 }catch(e){
    console.log('Sou catch pai');//atendera o erro do try pai.
 }finally{
    console.log('Sou finally pai');//Sempre sera executado.
 }
console.log('##########################');
 function retornaHora(data){
    if(data && !(data instanceof Date)){
       throw new TypeError('Esperando instância de Date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-Br',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
 }

 try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();// se pasar parametro que não seja uma instanci de dat dara erro.
    console.log(hora);
 }catch(e){
   // Tratar erro.
 }finally{
    console.log('tenha um bom dia');
 }

 


