const Vertice = require('./Vertice');

class Triangulo {
    #v1;
    #v2;
    #v3;
    #d1;
    #d2;
    #d3;

    constructor(v1, v2, v3) {
        if (!(v1 instanceof Vertice) || !(v2 instanceof Vertice) || !(v3 instanceof Vertice)) {
            throw new Error("Os parâmetros devem ser instâncias de Vertice.");
        }

        this.#v1 = v1;
        this.#v2 = v2;
        this.#v3 = v3;

        this.#d1 = this.#v1.distancia(this.#v2);
        this.#d2 = this.#v2.distancia(this.#v3);
        this.#d3 = this.#v3.distancia(this.#v1);

        if ((this.#d1 + this.#d2 > this.#d3) && (this.#d1 + this.#d3 > this.#d2) && (this.#d2 + this.#d3 > this.#d1)) {
            // Triângulo válido
        } else {
            throw new Error("Os vértices informados não formam um triângulo!");
        }
        
    }

    get v1() {
        return this.#v1;
    }

    get v2() {
        return this.#v2;
    }

    get v3() {
        return this.#v3;
    }

    equals(triangulo) {
        if (!(triangulo instanceof Triangulo)) {
            throw new Error("O parâmetro deve ser uma instância de Triangulo.");
        }

        const distancias1 = [this.#d1, this.#d2, this.#d3].sort((a, b) => a - b);
        const distancias2 = [triangulo.#d1, triangulo.#d2, triangulo.#d3].sort((a, b) => a - b);

        return distancias1[0] === distancias2[0] && distancias1[1] === distancias2[1] && distancias1[2] === distancias2[2];
    }

    get perimetro() {
        return this.#d1 + this.#d2 + this.#d3;
    }

    tipo() {
        if (this.#d1 === this.#d2 && this.#d2 === this.#d3) {
            console.log('Equilátero\n');
        } else if (this.#d1 === this.#d2 || this.#d1 === this.#d3 || this.#d2 === this.#d3) {
            console.log('Isósceles\n');
        } else {
            console.log('Escaleno\n');
        }
    }

    clone() {
        return new Triangulo(this.#v1, this.#v2, this.#v3);
    }

    get area() {
        const s = (this.#d1 + this.#d2 + this.#d3)/2;

        return Math.sqrt(s*(s-this.#d1)*(s-this.#d2)*(s-this.#d3)).toFixed(2);
    }
}

module.exports = Triangulo;