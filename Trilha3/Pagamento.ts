class Pagamento {
    processar(): void {
        console.log("Iniciando processamento de pagamento genérico...");
    }
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) {
        super();
    }

    private validarCartao(): boolean {
        if (this.numeroCartao.length === 16) {
            console.log(`- Cartão ${this.numeroCartao.substring(0, 4)}... validado.`);
            return true;
        }
        console.log("- Cartão inválido.");
        return false;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log("Pagamento com Cartão processado com sucesso.");
        } else {
            console.log("Falha ao processar pagamento com Cartão.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    private gerarCodigoBoleto(): string {
        return `00190.00000.00000.${Math.floor(Math.random() * 9000) + 1000}`;
    }

    processar(): void {
        const codigo = this.gerarCodigoBoleto();
        console.log(`Boleto gerado: Código de barras ${codigo}.`);
        console.log("Aguardando confirmação de pagamento do Boleto.");
    }
}

function processarTransacoes(transacoes: Pagamento[]): void {
    for (const transacao of transacoes) {
        transacao.processar(); 
    }
}

const transacoes: Pagamento[] = [
    new PagamentoCartao("1234567890123456"),
    new PagamentoBoleto()
];

processarTransacoes(transacoes);