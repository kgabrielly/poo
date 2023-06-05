class Aluno{
    constructor(nome, idade, matricula){
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
    }
};

class Turma{
    constructor(){
        this.listaDeAlunos = []
    }
    adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno)
    }
    removerAluno(){
        for (let i = 0; i < listaAlunos.length; i++) {
            if (this.listaDeAlunos[i].matricula === matricula) {
             this.listaDeAlunos.splice(i,1);   
            }            
        }
    }
}