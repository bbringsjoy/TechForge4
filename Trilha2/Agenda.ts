class Agenda {
    private compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    public adicionarCompromisso(compromisso: string): void {
        if (compromisso.trim() !== "") {
            this.compromissos.push(compromisso);
            console.log(`Compromisso adicionado: "${compromisso}"`);
        } else {
            console.log("Compromisso não pode ser vazio.");
        }
    }

    public listarCompromissos(): void {
        if (this.compromissos.length === 0) {
            console.log("A agenda está vazia.");
            return;
        }

        console.log("\n--- Lista de Compromissos ---");
        this.compromissos.forEach((comp, index) => {
            console.log(`${index + 1}. ${comp}`);
        });
        console.log("---------------------------\n");
    }
}