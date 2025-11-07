abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }
    
    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function exibirAreas(formas: FiguraGeometrica[]): void {
    for (const forma of formas) {
        const nome = forma.constructor.name;
        const area = forma.calcularArea().toFixed(2);
        console.log(`${nome}: Área = ${area}`);
    }
}

const minhasFormas: FiguraGeometrica[] = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 8)
];

exibirAreas(minhasFormas);