const prompt = require('prompt-sync')();
const Poligono = require('./Poligono');
const { obterCoordenadas } = require('./Coordenadas.js');

function main() {
    console.log("Criando um polígono:\n");
    
    const vertices = [];
    const numVertices = parseInt(prompt("Quantos vértices o polígono terá (mínimo 3)? "));

    if (numVertices < 3) {
        console.log("Um polígono deve ter pelo menos 3 vértices.");
        return;
    }

    for (let i = 1; i <= numVertices; i++) {
        const vertice = obterCoordenadas(i);
        vertices.push(vertice);
    }

    try {
        const poligono = new Poligono(vertices);

        console.log(`\nPolígono criado com sucesso!`);
        console.log(`Quantidade de vértices: ${poligono.qtdVertices}`);
        console.log(`Perímetro do polígono: ${poligono.perimetro.toFixed(2)}`);
    } catch (error) {
        console.error("Erro ao criar o polígono:", error.message);
    }
}

main();