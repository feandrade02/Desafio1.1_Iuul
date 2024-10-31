const prompt = require('prompt-sync')();
const Vertice = require('./Vertice');

function obterCoordenadas(indice) {
    while (true) {
        const input = prompt(`Digite as coordenadas do vértice ${indice} (No formato x,y): `);
        const [x, y] = input.split(',').map(Number);
        
        if (isNaN(x) || isNaN(y)) {
            console.log("Por favor, insira números válidos.");
        } else {
            return new Vertice(x, y); // Retorna um novo vértice
        }
    }
}

module.exports = { obterCoordenadas };