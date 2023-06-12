class Passageiro{
    constructor(_andarPretendido){
        this._andarPretendido = _andarPretendido
        
    }
};

class Elevador{
    constructor(){
        this._andarAtual = 0;
        this._quantidadeMaximaDePassageiros = 9;
        this._listaDePassageiros = []
    };

    adicionarPassageiro(Passageiro){ 
        if(this._listaDePassageiros.length < 9){
        this._listaDePassageiros.push(Passageiro)
        console.log(`1 passageiro que deseja ir ao andar ${Passageiro._andarPretendido} 
        entrou no elevador. agora o elevador tem ${this._listaDePassageiros.length} passageiros`)
        }
     else { console.log(`O passageiro não pode entrar. 
   O elevador já atingiu a capacidade máxima: ${this._listaDePassageiros.length} passageiros.`)
}
    };

    movimentar(_andarDeDestino){
        this.sairam = 0
        this._andarAtual = _andarDeDestino
        console.log(`MOVIMENTAÇÃO \n Agora o elevador está no ANDAR ${this._andarAtual}`)
        for(let i = 0; i < this._listaDePassageiros.length; i++){
            console.log(this._listaDePassageiros[i]._andarPretendido)
            console.log(this.andarAtual)
            if(this._listaDePassageiros[i]._andarPretendido == this._andarAtual){
                this._listaDePassageiros.splice(i, 1);
                this.sairam++ 
            }
          
        }
        console.log(`${this.sairam} passageiros SAÍRAM do elevador.`)
        console.log(`${this._listaDePassageiros.length} passageiros CONTINUAM no elevador.`)

    };
}

