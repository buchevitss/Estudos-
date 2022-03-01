class Namorado{

    constructor(nome, idade, lindo){
        this.nome = nome
        this.idade = idade
        this.lindo = lindo 
    }

    static buildNamorado (){
        return new Namorado('nome','idade','lindo')
    }

}

const Lucas = Namorado.buildNamorado = (['Lucas','22',true])

Lalala = new Map ()
Lalala.set('Namorado',[Lucas])

for (const [_,Namorado] of Lalala.entries()){
    console.table(Namorado)
}