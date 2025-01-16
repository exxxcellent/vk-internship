// types
import type { TCat } from '@/types/cat.interface';
// components
import Cat from './cat';

export default function Cats({ cats }: { cats: TCat[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 p-5 mx-auto justify-center">
            {cats
                .filter((cat: TCat) => cat.image?.url)
                .map((cat: TCat) => (
                    <Cat
                        key={cat.id}
                        cat={cat}
                    />
                ))}
        </div>
    );
}
