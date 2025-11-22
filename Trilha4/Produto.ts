interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

const item1 = new ItemLoja(1, "Chocolate Premium", 15.50);
console.log(`Produto: ${item1.nome}, Preço: R$ ${item1.preco.toFixed(2)}`);