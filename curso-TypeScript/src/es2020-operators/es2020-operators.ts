//ES2020 - 2 operadores que combinados são ainda mais poderosos.
//Encadeamento opcional e Operador de coalescência nula.

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  //data: new Date(),
};

//ENCADEAMENTO OPCIONAL:  ? esta representando o encadeamento opcional.(è do Js).
console.log(documento.data?.toLocaleDateString('pt-BR'));

//COALESCÊNCIA NULA: o operador ?? checa se o valor que está recebendo do lado esquerdo do operador é um no valor (null ou  undefine).

console.log(
  documento.data?.toLocaleDateString('pt-BR') ?? '1-Ixi  não existe data',
);
console.log(undefined ?? '2-Ixi  não existe data');
console.log(null ?? '3-Ixi  não existe data');
console.log(false ?? '4-Ixi  não existe data');
console.log(0 ?? '4-Ixi  não existe data');
console.log('' ?? '4-Ixi  não existe data');
