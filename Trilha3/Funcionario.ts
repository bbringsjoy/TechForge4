abstract class Funcionario {
    private _nome: string;
    protected _salario: number;

    constructor(nome: string, salario: number) {
        this._nome = nome;
        this._salario = salario;
    }

    public get nome(): string {
        return this._nome;
    }

    public get salarioBase(): number {
        return this._salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this._salario * 0.10; // 10%
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this._salario * 0.05; // 5%
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    console.log("\n--- Exercício 5: Cálculo de Salário com Bônus ---");
    for (const func of funcionarios) {
        const bonus = func.calcularBonus();
        const salarioFinal = func.salarioBase + bonus;
        
        console.log(`${func.nome} (${func.constructor.name}):`);
        console.log(`  Salário Base: R$ ${func.salarioBase.toFixed(2)}`);
        console.log(`  Bônus (R$ ${bonus.toFixed(2)}): ${(bonus / func.salarioBase * 100).toFixed(0)}%`);
        console.log(`  Salário Final: R$ ${salarioFinal.toFixed(2)}`);
    }
}

const minhaEquipe: Funcionario[] = [
    new Gerente("Ana Souza", 10000),
    new Operario("Beto Lima", 3000),
    new Gerente("Carlos Silva", 12000)
];

calcularSalarioComBonus(minhaEquipe);