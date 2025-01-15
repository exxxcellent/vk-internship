import type { TCat } from './cat.interface';

export type TCatsStore = {
    cats: TCat[];
    favoriteCats: TCat[];
    getCats: () => void;
    toggleToFavorite: (cat: TCat) => void;
};
