/**
 * SINGLETON - GoF:
 * Singleton é um padrão de design que garante uma única
 * instância de uma classe, proporcionando acesso global a essa
 * instância. É útil quando apenas uma instância é necessária
 * para coordenar ações no sistema, como gerenciamento de
 * configuração, controle de conexão a bancos de dados e
 * centralização de logs. A implementação típica inclui um
 * construtor privado, um método estático para obtenção da
 * instância única e uma variável estática privada para
 * armazenamento da instância.
 *
 */
/**
 * Factory Method - Gof:
 * O Factory Method é um padrão de design criacional da Gang of
 *  Four (GoF) que proporciona uma interface para criar
 * instâncias de uma classe, permitindo que subclasses alterem o
 * tipo de objetos a serem criados. Essencialmente, ele
 * encapsula a criação de objetos, delegando essa
 * responsabilidade para as subclasses. A estrutura básica do
 * Factory Method inclui a definição de uma interface (ou classe
 * abstrata) com o método de criação (Factory Method), sendo que
 * as subclasses concretas implementam esse método para criar
 * instâncias específicas da classe.
 *
 */

//Singleton - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  //Factory Method
  static getDatabase(host: string, user: string, password: string) {
    if (Database.database) {
      console.log('Retornando instancia já criada.');
      return Database.database;
    }
    console.log('Criando nova instancia.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

console.log('db1: ');
const db1 = Database.getDatabase('localhost://3000', 'Lobo', 'Df543%$5');
db1.connect();

console.log('db2: ');
const db2 = Database.getDatabase('localhost://5000', 'Cleo', 'Df543%$R3');
db2.connect();

console.log('db3: ');
const db3 = Database.getDatabase('localhost://5000', 'Mren', 'Df543%$RSt7');
db3.connect();

console.log('db4: ');
const db4 = Database.getDatabase('localhost://5000', 'Sor', 'Df543%$LE#');
db4.connect();
