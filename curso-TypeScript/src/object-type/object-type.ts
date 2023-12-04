//Para deixar o objeto totalmente aberto e poder adicionar novas chaves alem de como esta no codigo embaix, podemo usar tipo : Record<string, unknow>

const objectA: {
  keyA: string;
  readonly keyB: string; // chave não pode ser alterada
  keyC?: string; // ? chave opcional
  [key: string]: unknown; //index signature: permite adicionar novas chaves
} = {
  keyA: 'Value',
  keyB: 'value',
};

objectA.keyA = 'Troço';
objectA.keyB = 'New Value';
objectA.keyC = 'Meio';
objectA.keyR = 'New Key';

console.log(objectA);
