class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' tá ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' tá desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smatr');
d1.ligar();
d1.desligar();

/**
 * ************
 *   Herança
 * ************
 */

class Licuadora extends DispositivoEletronico{
    constructor(nome, cor, jarra){
        //super chama o construtor da classe pai
        super(nome);
        this.cor = cor;
        this.jarra = jarra;
    }
}

class Mixer extends Licuadora{
    constructor(nome, cor, tamanho){
        super(nome, cor);
        this.tamanho = tamanho;
    }
    //alterando metodo ligar.
    ligar(){
        console.log('Você alterou o metodo ligar, se liga');
    }

    falaoi(){
        console.log('oi');
    }
}
const l1 = new Licuadora('Arno', 'Pink', 'Vidro');
l1.ligar();

const m2 = new Mixer('Philco', 'Orange', 'XXL');
m2.ligar();