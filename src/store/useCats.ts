// zustand
import { create } from 'zustand';
// middleware
import { createJSONStorage, persist } from 'zustand/middleware';
// types
import type { TCatsStore } from '@/types/catsStore.interface';
import type { TCat } from '@/types/cat.interface';

export const useCats = create<TCatsStore>()(
    persist(
        (set, get) => ({
            cats: [],
            favoriteCats: [],
            getCats: async () => {
                const response = await fetch(
                    'https://api.thecatapi.com/v1/breeds/?limit=30',
                    {
                        headers: {
                            'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
                        },
                    }
                );
                const cats = await response.json();
                const formattedCats = cats.map((cat: TCat) => {
                    get().favoriteCats.forEach((favoriteCat) => {
                        if (favoriteCat.id === cat.id) {
                            cat.isFavorite = true;
                        }
                    });
                    return cat;
                });
                set({ cats: formattedCats });
            },
            toggleToFavorite: (cat: TCat) => {
                const { favoriteCats } = get();
                const isFavorite = favoriteCats.find(
                    (favoriteCat) => favoriteCat.id === cat.id
                );
                if (isFavorite) {
                    set({
                        favoriteCats: favoriteCats.filter(
                            (favoriteCat) => favoriteCat.id !== cat.id
                        ),
                    });
                } else {
                    set({
                        favoriteCats: [
                            ...favoriteCats,
                            {
                                ...cat,
                                isFavorite: true,
                            },
                        ],
                    });
                }
            },
        }),
        {
            name: 'cats',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                favoriteCats: state.favoriteCats,
            }),
        }
    )
);
