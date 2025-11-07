class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public getSaldo(): number {
        return this.saldo;
    }
    
    public getTitular(): string {
        return this.titular;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    public sacar(valor: number): boolean {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
            return true;
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
            return false;
        } else {
            console.log("O valor do saque deve ser positivo.");
            return false;
        }
    }
}