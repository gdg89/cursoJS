/**
 * A palavra chave static define um método estático para a
 *  classe. Métodos estáticos não são chamados na instâncias
 *  da classe. Em vez disso, eles são chamados na própria
 *  classe. Geralmente, são funções utilitárias, como funções
 *  para criar ou clonar objetos.
 * 
 * 
 * Chamadas a métodos estáticos são feitas diretamente na
 *  classe e não podem ser feitas em uma instância da classe.
 *  Métodos estáticos são comumente utilizados como funções 
 *  utilitárias.
 * 
 * Metodos estatico não tem acesso aos dados da instancia!!
 */

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        this.statusPilha = "Não trocou";
    }
    //Metodos de instancia(metodo que são chamados na instanca)
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= -2;
    }

    // Metodo estatico(é um metodo de classe, ele so poder ser chamado na classe, e sera aplicado em todas as instancias.)
    static trocaPilha(){
        // console.log("OK, pilha trocada!");
        this.statusPilha = "pilha trocada!";
    }
}



const controle1 = new ControleRemoto('LG');
//Chamando metodos de instancia
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log('Metodo de instancia: ', controle1);


//Chamando metodo estatico
console.log("### Metodo Estatico ###");
ControleRemoto.trocaPilha();
console.log(controle1);


