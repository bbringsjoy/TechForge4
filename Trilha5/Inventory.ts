abstract class Inventory {
    protected inventory: Record<string, number> = {};
    
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    
    getInventory(): Record<string, number> {
        return this.inventory;
    }

    listItems(): string[] {
        return Object.entries(this.inventory).map(([item, quantity]) => `${item}: ${quantity} unidades`);
    }
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        if (quantity < 1) return;
        
        this.inventory[item] = (this.inventory[item] || 0) + quantity;
        console.log(`[Armazém] Adicionado ${quantity}x ${item}. Total: ${this.inventory[item]}`);
    }

    removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
            console.log(`[Armazém] Item "${item}" removido do inventário.`);
        } else {
            console.log(`[Armazém] Item "${item}" não encontrado.`);
        }
    }
}

class StoreInventory extends Inventory {
    private readonly MAX_QUANTITY = 10;
    
    addItem(item: string, quantity: number): void {
        if (quantity < 1) return;

        let currentQuantity = this.inventory[item] || 0;
        let newQuantity = currentQuantity + quantity;

        if (newQuantity > this.MAX_QUANTITY) {
            const added = this.MAX_QUANTITY - currentQuantity;
            this.inventory[item] = this.MAX_QUANTITY;
            console.warn(`[Loja] Limite excedido para ${item}. Apenas ${added} unidades foram adicionadas. Total: ${this.MAX_QUANTITY}`);
        } else {
            this.inventory[item] = newQuantity;
            console.log(`[Loja] Adicionado ${quantity}x ${item}. Total: ${newQuantity}`);
        }
    }

    removeItem(item: string): void {
        if (this.inventory[item]) {
            this.inventory[item] -= 1;
            if (this.inventory[item] <= 0) {
                delete this.inventory[item];
                console.log(`[Loja] Última unidade de "${item}" vendida.`);
            } else {
                console.log(`[Loja] Removida 1x ${item}. Restante: ${this.inventory[item]}`);
            }
        } else {
            console.log(`[Loja] Item "${item}" não encontrado.`);
        }
    }
}