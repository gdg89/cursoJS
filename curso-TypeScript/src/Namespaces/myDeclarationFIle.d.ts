/**
 * Aqui tudo Deve ser global
 */

//atrelando meu type pra tipagem do loDash
declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare let global: typeof globalThis & {
  MYGLOBAL: string;
};
