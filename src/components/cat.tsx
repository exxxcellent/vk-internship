'use client';
// store
import { useCats } from '@/store/useCats';
// types
import type { TCat } from '@/types/cat.interface';
// icons
import { FiHeart } from 'react-icons/fi';

type TCatProps = {
    cat: TCat;
};

export default function Cat({ cat }: TCatProps) {
    const toggleToFavorite = useCats((state) => state.toggleToFavorite);

    const className =
        'absolute right-[5%] bottom-[5%] w-12 h-12 hover:fill-red-500 text-red-500 cursor-pointer duration-200';

    const onClickHandler = (cat: TCat) => {
        toggleToFavorite(cat);
    };

    return (
        <div className="relative sm:max-w-56 sm:max-h-56">
            <img
                className="w-full min-h-56 sm:w-56 sm:h-56 object-cover"
                alt={cat.id}
                src={cat.image.url}
            />
            <FiHeart
                className={[className, cat.isFavorite && 'fill-red-500'].join(
                    ' '
                )}
                onClick={() => onClickHandler(cat)}
            />
        </div>
    );
}
