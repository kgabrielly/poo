let aluno01 = new Aluno(
    "Kemylly",
    15 
);

let aluno02 = new Aluno(
    "Gabriel",
    17 
);

let aluno03 = new Aluno(
    "Alexsander",
    50 
);

let aluno04 = new Aluno(
    "Osvaldo Epifânio",
    20303889 
);

let aluno05 = new Aluno(
    "melrick",
    16 
);

var listaAlunos = [];
listaAlunos.push(aluno01, aluno02, aluno03, aluno04, aluno05);

for(let i=0; i<listaAlunos.length; i++){
console.log(`Nome: ${listaAlunos[i].nome}`);
console.log(`Idade: ${listaAlunos[i].idade}`);
}

let segAno = new Turma();
let tecAno = new Turma();
segAno.adicionarAluno(aluno01);
segAno.adicionarAluno(aluno02);
segAno.adicionarAluno(aluno03);
tecAno.adicionarAluno(aluno04);
tecAno.adicionarAluno(aluno05);

console.log(segAno);
console.log(tecAno);

