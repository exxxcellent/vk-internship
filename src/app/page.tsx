'use client';
// react
import { Suspense, useEffect } from 'react';
// store
import { useCats } from '@/store/useCats';
// components
import Navbar from '@/components/navbar';
import Cats from '@/components/cats';

export default function Page() {
    const cats = useCats((state) => state.cats);
    const getCats = useCats((state) => state.getCats);

    useEffect(() => {
        getCats();
    }, []);

    return (
        <main>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Cats cats={cats} />
            </Suspense>
        </main>
    );
}
