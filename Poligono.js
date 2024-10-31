const Vertice = require('./Vertice');

class Poligono {
    #vertices;

    constructor(vertices) {
        if (!Array.isArray(vertices) || vertices.length < 3) {
            throw new Error("O polígono deve ter ao menos 3 vértices.");
        }

        this.#vertices = [];

        for (const vertice of vertices) {
            this.addVertice(vertice);
        }
    }

    addVertice(v) {
        if (!(v instanceof Vertice)) {
            throw new Error("O vértice deve ser uma instância de Vertice.");
        }

        // Verifica se o vértice já existe no polígono
        for (const vertice of this.#vertices) {
            if (vertice.x === v.x && vertice.y === v.y) {
                return false; // Retorna falso se o vértice já estiver presente
            }
        }

        this.#vertices.push(v); // Adiciona o vértice ao polígono
        return true;
    }

    get perimetro() {
        let perimetro = 0;

        for (let i = 0; i < this.#vertices.length; i++) {
            const verticeAtual = this.#vertices[i];
            const proximoVertice = this.#vertices[(i + 1) % this.#vertices.length]; // Último vértice conecta-se ao primeiro

            perimetro += verticeAtual.distancia(proximoVertice);
        }

        return perimetro;
    }

    get qtdVertices() {
        return this.#vertices.length;
    }
}

module.exports = Poligono;
