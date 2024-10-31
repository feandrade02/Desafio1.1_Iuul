const prompt = require('prompt-sync')();

const { obterCoordenadas } = require('./Coordenadas.js');

function main() {
    const vertices = [];

    for (let i = 1; i <= 3; i++) {
        const vertice = obterCoordenadas(i);
        vertices.push(vertice);
    }

    console.log('\nDistância entre os vértices 1 e 2: ' + vertices[0].distancia(vertices[1]).toFixed(2) + '\n');
    console.log('Distância entre os vértices 1 e 3: ' + vertices[0].distancia(vertices[2]).toFixed(2) + '\n');
    console.log('Distância entre os vértices 2 e 3: ' + vertices[1].distancia(vertices[2]).toFixed(2) + '\n');

    var valido = true;

    while (valido) {
        const input = prompt(`Digite novas coordenadas para o vértice 2 (No formato x,y): `);
        const [x, y] = input.split(',').map(Number);
        if (isNaN(x) || isNaN(y)) {
            console.log("Por favor, insira números válidos.");
        } else {
            vertices[1].move(x, y); // Move o vértice 2 de posição
            valido = false;
        }
    }

    console.log('\nVerificando se os vértices são iguais:\n');
    console.log('Vértices 1 e 2: '); 
    vertices[0].equals(vertices[1]);
    console.log('\nVértices 1 e 3: ')
    vertices[0].equals(vertices[2]);
    console.log('\nVértices 2 e 3: ')
    vertices[1].equals(vertices[2]);

}

main();