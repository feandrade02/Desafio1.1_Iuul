class Aluno {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
        this.P1 = null;
        this.P2 = null;
    }

    get notaFinal() {
        if (this.P1 !== null && this.P2 !== null) {
            return ((this.P1 + this.P2) / 2).toFixed(1);
        } else if (this.P1 !== null) {
            return (this.P1 / 2).toFixed(1);
        } else if (this.P2 !== null) {
            return (this.P2 / 2).toFixed(1);
        } else {
            return (0).toFixed(1);
        }
    }
}

class Turma {
    constructor() {
        this.alunos = [];
    }

    inserirAluno(matricula, nome) {
        if (this.alunos.some(aluno => aluno.matricula === matricula)) {
            console.log(`Aluno com matrícula ${matricula} já existe.`);
            return;
        }
        this.alunos.push(new Aluno(matricula, nome));
        console.log(`Aluno ${nome} inserido com sucesso!`);
    }

    removerAluno(matricula) {
        const index = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if (index !== -1) {
            console.log(`Aluno ${this.alunos[index].nome} removido com sucesso!`);
            this.alunos.splice(index, 1);
        } else {
            console.log(`Aluno com matrícula ${matricula} não encontrado.`);
        }
    }

    lancarNota(matricula, prova, nota) {
        const aluno = this.alunos.find(aluno => aluno.matricula === matricula);
        if (!aluno) {
            console.log(`Aluno com matrícula ${matricula} não encontrado.`);
            return;
        }
        if (prova === 'P1') {
            aluno.P1 = nota;
        } else if (prova === 'P2') {
            aluno.P2 = nota;
        } else {
            console.log(`Prova inválida. Escolha 'P1' ou 'P2'.`);
            return;
        }
        console.log(`Nota ${nota} lançada para ${prova} do aluno ${aluno.nome}.`);
    }

    imprimirAlunos() {
        console.log(`\nAlunos da Turma:`);
        this.alunos
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .forEach(aluno => {
                console.log(`Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}, P1: ${aluno.P1 ?? "Faltou"}, P2: ${aluno.P2 ?? "Faltou"}, NF: ${aluno.notaFinal}`);
            });
    }
}

const turma = new Turma();
turma.inserirAluno("12345", "Ana de Almeida");
turma.inserirAluno("23456", "Bruno Carvalho");
turma.inserirAluno("34567", "Fernanda Abreu");
turma.inserirAluno("45678", "Joao Santos");

turma.lancarNota("12345", "P1", 8.0);
turma.lancarNota("12345", "P2", 9.5);
turma.lancarNota("23456", "P1", 7.0);
turma.lancarNota("34567", "P2", 8.5);

turma.imprimirAlunos();

turma.removerAluno("45678");
turma.imprimirAlunos();
