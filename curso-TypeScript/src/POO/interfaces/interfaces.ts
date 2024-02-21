/**
 * INTERFACE:
 *  Geralmente é utilizada para modelar objetos!
 *  Mas não muda nada referente a types.
 */

interface TypeName {
  name: string;
}

interface TypeLastName {
  lastname: string;
}

interface TypeFullName {
  fullName(): string;
}

//não consigo fazer isso com interface.
//type TypePerson = TypeName & TypeLastName & TypeFullName;

//consigo extender interfaces
interface TypePerson2 extends TypeName, TypeLastName, TypeFullName {}

// È possivel implementar varios type numa classe.
export class Person implements TypePerson2 {
  constructor(
    public name: string,
    public lastname: string,
  ) {}

  fullName(): string {
    console.log('### TYPES ###');
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Mike', 'Gutierrez');
console.log(person.fullName());
