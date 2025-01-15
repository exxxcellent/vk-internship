'use client';
// components
import Navbar from '@/components/navbar';
import Cats from '@/components/cats';
// store
import { useCats } from '@/store/useCats';

export default function Page() {
    const cats = useCats((state) => state.favoriteCats);

    return (
        <main>
            <Navbar />
            <Cats cats={cats} />
        </main>
    );
}
