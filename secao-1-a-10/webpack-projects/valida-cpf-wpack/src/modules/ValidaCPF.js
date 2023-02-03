// 705.484.450-52 070.987.720-03

export default class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'clearCpf', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSequence(){
        return this.clearCpf.charAt(0).repeat(11) === this.clearCpf;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.clearCpf.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;

    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for (let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
        console.log(total);
    }
    valida(){
        if(!this.clearCpf) return false;
        if(typeof this.clearCpf != 'string') return false;
        if(this.clearCpf.length != 11) return false;
        if(this.isSequence()) return false;
        this.geraNovoCpf();
        

        return this.novoCPF === this.clearCpf;
    }
}


