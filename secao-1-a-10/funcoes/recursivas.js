/**
 * Uma função é dita recursiva quando dentro dela
 *  é feita uma ou mais chamadas a ela mesma.
 * 
 * A recursividade tem um limite.(11290 no node)
 */

function recursiva(max){
   if(max >= 10) return;
   max ++;
   console.log(max);
   recursiva(max); 
}

recursiva(0);