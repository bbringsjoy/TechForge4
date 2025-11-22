interface ProdutoLoja {
    codigo: number;
    nome: string;
}


class Loja {
    private produtos: ProdutoLoja[] = [];
    constructor() {
        this.produtos.push({ codigo: 101, nome: "Fone de Ouvido" });
        this.produtos.push({ codigo: 102, nome: "Mouse sem Fio" });
        this.produtos.push({ codigo: 205, nome: "Teclado Mecânico" });
    }
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const minhaLoja = new Loja();
const produtoEncontrado = minhaLoja.buscarProdutoPorCodigo(102);
const produtoInexistente = minhaLoja.buscarProdutoPorCodigo(999);

console.log(`Busca 102: ${produtoEncontrado ? produtoEncontrado.nome : 'Não encontrado'}`);
console.log(`Busca 999: ${produtoInexistente ? produtoInexistente.nome : 'Não encontrado'}`);