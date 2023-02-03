const nome = 'Giuliano';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Daniel';
    falaNome();// retorna nome Giuaiano, pos ela lembra onde foi declarada e a varaivel que esta no seu escopo. e avariavel dentro do usaFalaNome não afeta ela.
}
usaFalaNome();