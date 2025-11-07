class Animal {
    private energia: number;

    constructor(energiaInicial: number = 50) {
        this.energia = energiaInicial;
    }

    comer(quantidade: number): void {
        this.energia += quantidade;
        console.log(`- Comendo. Energia aumentou em ${quantidade}.`);
    }

    statusEnergia(): void {
        console.log(`- Energia atual: ${this.energia}`);
    }

    protected getEnergia(): number {
        return this.energia;
    }

    protected setEnergia(novaEnergia: number): void {
        this.energia = novaEnergia;
    }
}


class Leao extends Animal {
    comer(quantidade: number): void {
        console.log(`\n--- Leão Caçando ---`);
        
        
        const energiaAtual = this.getEnergia();
        const energiaGasta = 15;
        this.setEnergia(energiaAtual - energiaGasta);
        console.log(`- Gastou ${energiaGasta} de energia para caçar.`);

        
        this.setEnergia(this.getEnergia() + quantidade);
        console.log(`- Se alimentou. Energia recuperada: ${quantidade}.`);
    }
}

class Passaro extends Animal {
    comer(quantidade: number): void {
        console.log(`\nPássaro se Alimentando`);
        super.comer(quantidade); 
    }
}

const simba = new Leao(80);
const piupiu = new Passaro(30);

//leão
simba.statusEnergia();
simba.comer(40);
simba.statusEnergia();

//pássaro
piupiu.statusEnergia();
piupiu.comer(10);
piupiu.statusEnergia();