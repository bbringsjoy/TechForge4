abstract class FavoriteManager {
    protected favorites: string[] = [];
    
    abstract addFavorite(item: string): void;
    
    getFavorites(): string[] {
        return this.favorites;
    }
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (this.favorites.some(fav => fav.toLowerCase() === item.toLowerCase())) {
            console.log(`Filme "${item}" já está na lista. Ignorado.`);
            return;
        }
        
        this.favorites.push(item);
        
        this.favorites.sort((a, b) => a.localeCompare(b));
        console.log(`Filme "${item}" adicionado e lista ordenada.`);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        this.favorites.unshift(item);
        console.log(`Livro "${item}" adicionado ao início da lista.`);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}