class Vertice {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    distancia(vertice) {
        if (!(vertice instanceof Vertice)) {
            throw new Error("O parâmetro deve ser uma instância de Vertice.");
        }
        
        const dx = vertice.x - this.#x;
        const dy = vertice.y - this.#y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    move(x_novo, y_novo) {
        this.#x = x_novo;
        this.#y = y_novo;
    }

    equals(vertice) {
        if (!(vertice instanceof Vertice)) {
            throw new Error("O parâmetro deve ser uma instância de Vertice.");
        }

        if (vertice.x === this.#x && vertice.y === this.#y) {
            console.log('são iguais!\n')
        }
        else {
            console.log('são distintos!\n') 
        }
    }
}

module.exports = Vertice;