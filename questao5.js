const prompt = require('prompt-sync')();
const { DateTime } = require('luxon');

function obterNome() {
    while (true) {
        const nome = prompt("Digite o nome (pelo menos 5 caracteres): ");
        if (nome.length >= 5) return nome;
        console.log("Erro: O nome deve ter pelo menos 5 caracteres.");
    }
}

function obterCPF() {
    while (true) {
        const cpf = prompt("Digite o CPF (exatamente 11 dígitos): ").replace(/\D/g, '');
        if (/^\d{11}$/.test(cpf)) return cpf;
        console.log("Erro: CPF deve ter exatamente 11 dígitos.");
    }
}

function obterDataNascimento() {
    while (true) {
        const input = prompt("Digite a data de nascimento (DD/MM/AAAA): ");
        const dataNascimento = DateTime.fromFormat(input, "dd/MM/yyyy");

        if (!dataNascimento.isValid) {
            console.log("Erro: Data inválida. Use o formato DD/MM/AAAA.");
            continue;
        }

        const idade = DateTime.now().diff(dataNascimento, 'years').years;
        if (idade >= 18) return dataNascimento.toFormat("dd/MM/yyyy");

        console.log("Erro: O cliente deve ter pelo menos 18 anos.");
    }
}

function obterRendaMensal() {
    while (true) {
        const renda = parseFloat(prompt("Digite a renda mensal (valor >= 0): ").replace(",", "."));
        if (renda >= 0) return renda.toFixed(2);
        console.log("Erro: A renda mensal deve ser um valor igual ou maior que 0.");
    }
}

function obterEstadoCivil() {
    while (true) {
        const estadoCivil = prompt("Digite o estado civil (C, S, V, D): ").toUpperCase();
        if (["C", "S", "V", "D"].includes(estadoCivil)) return estadoCivil;
        console.log("Erro: Estado civil deve ser C, S, V ou D.");
    }
}

function obterDependentes() {
    while (true) {
        const dependentes = parseInt(prompt("Digite o número de dependentes (0 a 10): "));
        if (dependentes >= 0 && dependentes <= 10) return dependentes;
        console.log("Erro: O número de dependentes deve ser entre 0 e 10.");
    }
}

function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function main() {
    const nome = obterNome();
    const cpf = obterCPF();
    const dataNascimento = obterDataNascimento();
    const rendaMensal = obterRendaMensal();
    const estadoCivil = obterEstadoCivil();
    const dependentes = obterDependentes();

    console.log("\nDados do Cliente:");
    console.log(`Nome: ${nome}`);
    console.log(`CPF: ${formatarCPF(cpf)}`);
    console.log(`Data de Nascimento: ${dataNascimento}`);
    console.log(`Renda Mensal: R$ ${parseFloat(rendaMensal).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);
    console.log(`Estado Civil: ${estadoCivil}`);
    console.log(`Dependentes: ${dependentes}`);
}

main();
