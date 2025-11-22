interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private acervo: Livro[] = [];

    constructor() {
        this.acervo.push({ titulo: "A Grande Aventura", autor: "Maria", disponivel: true });
        this.acervo.push({ titulo: "O Segredo Antigo", autor: "João", disponivel: false });
        this.acervo.push({ titulo: "Código Secreto", autor: "Pedro", disponivel: true });
    }
    buscarLivrosDisponiveis(): Livro[] {
        return this.acervo.filter(livro => livro.disponivel === true);
    }
}

const biblioteca = new Biblioteca();
const disponiveis = biblioteca.buscarLivrosDisponiveis();

console.log("\nLivros Disponíveis:");
disponiveis.forEach(livro => console.log(`- ${livro.titulo} por ${livro.autor}`));