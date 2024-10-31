const prompt = require('prompt-sync')();
const Triangulo = require('./Triangulo');

const { obterCoordenadas } = require('./Coordenadas.js');

function main() {
    const vertices_t1 = [];
    const vertices_t2 = [];
    const vertices_t3 = [];

    console.log('Escolha os vértices do primeiro triângulo:\n')
    for (let i = 1; i <= 3; i++) {
        const vertice = obterCoordenadas(i);
        vertices_t1.push(vertice);
    }

    const t1 = new Triangulo(vertices_t1[0], vertices_t1[1], vertices_t1[2]);

    console.log('\nEscolha os vértices do segundo triângulo:\n')
    for (let i = 1; i <= 3; i++) {
        const vertice = obterCoordenadas(i);
        vertices_t2.push(vertice);
    }

    const t2 = new Triangulo(vertices_t2[0], vertices_t2[1], vertices_t2[2]);

    console.log('\nEscolha os vértices do terceiro triângulo:\n')
    for (let i = 1; i <= 3; i++) {
        const vertice = obterCoordenadas(i);
        vertices_t3.push(vertice);
    }

    const t3 = new Triangulo(vertices_t3[0], vertices_t3[1], vertices_t3[2]);

    console.log('\nVerificando se os triângulos são iguais:\n');
    console.log('Triângulos 1 e 2: '); 
    t1.equals(t2) ? console.log('são iguais!\n') : console.log('são distintos!\n');
    console.log('\nTriângulos 1 e 3: ')
    t1.equals(t3) ? console.log('são iguais!\n') : console.log('são distintos!\n');
    console.log('\nTriângulos 2 e 3: ')
    t2.equals(t3) ? console.log('são iguais!\n') : console.log('são distintos!\n');

    console.log('\nPerímetro do triângulo 1: ' + t1.perimetro);
    console.log('\nPerímetro do triângulo 2: ' + t2.perimetro);
    console.log('\nPerímetro do triângulo 3: ' + t3.perimetro);

    console.log('\nTipo do triângulo 1: ');
    t1.tipo();
    console.log('\nTipo do triângulo 2: ');
    t2.tipo();
    console.log('\nTipo do triângulo 3: ');
    t3.tipo();

    console.log('\nÁrea do triângulo 1: ' + t1.area);
    console.log('\nÁrea do triângulo 2: ' + t2.area);
    console.log('\nÁrea do triângulo 3: ' + t3.area);

    let input;
    while (true) {
        input = parseInt(prompt('\nEscolha um triângulo para clonar (digite 1, 2 ou 3): '));
    
        if (input === 1 || input === 2 || input === 3) {
            break;
        } else {
            console.log('Entrada inválida. Tente novamente.\n');
        }
    }

    let t_clone;
    if (input === 1) {
        t_clone = t1.clone();
        console.log('\nTriângulo 1 clonado!');
    } else if (input === 2) {
        t_clone = t2.clone();
        console.log('\nTriângulo 2 clonado!');
    } else {
        t_clone = t3.clone();
        console.log('\nTriângulo 3 clonado!');
    }

}

main();