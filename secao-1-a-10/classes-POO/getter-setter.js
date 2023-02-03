class Carro{
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(){
        if(this.velocidade >= 100)return;
        this.velocidade++;
    }

    freiar(){
        if(this.velocidade <= 0)return;
        this.velocidade--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++ ){
    c1.acelerar();
}
/**
 * Caso alguem declarar velocidade 1500, 
 * a velocidade estaria pasando o limite igualmente.
 * Para proteger o metodo, e naõ utlrapasar a velocidade maxima é utilizado o symbol.
 */
c1.velocidade = 1500;
console.log(c1);


//Exemplo com Symbol

const _velocidade = Symbol('velocidade');
class Carro2{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }


    get velocidade(){
        return this[_velocidade];
    }
    /**
     * set validado que a velocidade não 
     * seja alterada por um valor diferente de number, 
     * e nem por uma velocidade fora do rango especificado.
     */
    set velocidade(valor){
        if(typeof valor !== 'number')return;
        if(valor >= 100 || valor <= 0)return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100)return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0)return;
        this[_velocidade]--;
    }
}

const c2 = new Carro2('Camaro');

for(let i = 0; i <= 200; i++ ){
    c2.acelerar();
}
console.log("===== AGORA COM SYMBOL ====");
c2.velocidade = 1500;
console.log(c2.velocidade);


