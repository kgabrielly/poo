class Aluno{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
};

class Turma{
    constructor(){
        this.listaDeAlunos = []
    }
    adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno)
    }
}