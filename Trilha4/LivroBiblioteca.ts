interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private acervo: LivroBiblioteca[] = [];

    constructor() {
        this.acervo.push({ titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", disponivel: true });
        this.acervo.push({ titulo: "Viagem ao Centro da Terra", autor: "Júlio Verne", genero: "Ficção", disponivel: true });
        this.acervo.push({ titulo: "Memórias Póstumas", autor: "Machado de Assis", genero: "Romance", disponivel: false });
        this.acervo.push({ titulo: "20 Mil Léguas", autor: "Júlio Verne", genero: "Ficção", disponivel: true });
    }
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.acervo.filter(livro => livro.genero === genero);
    }
    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.acervo.filter(livro => livro.autor === autor);
    }
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        const disponiveis = this.acervo.filter(livro => livro.disponivel);
        return disponiveis.sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const gestao = new BibliotecaGestao();

console.log("\n--- Filtro de Gênero (Ficção) ---");
gestao.filtrarPorGenero("Ficção").forEach(l => console.log(`- ${l.titulo}`));

console.log("\n--- Busca por Autor (Machado de Assis) ---");
gestao.buscarPorAutor("Machado de Assis").forEach(l => console.log(`- ${l.titulo} (Disponível: ${l.disponivel})`));

console.log("\n--- Livros Disponíveis Ordenados ---");
gestao.obterLivrosDisponiveisOrdenados().forEach(l => console.log(`- ${l.titulo}`));