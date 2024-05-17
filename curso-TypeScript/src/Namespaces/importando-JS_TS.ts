//PAra poder importar codigo JS puro, precisamos configurar "allowJs": TRUE  no tsconfig.ts
import { soma } from './soma/soma';

const resultado = soma(73, 52) as number;
console.log(resultado);
