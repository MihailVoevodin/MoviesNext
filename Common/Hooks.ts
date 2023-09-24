import {useEffect} from 'react';

/** Хук для закрытия окна при клике вне элемента. */
export const useOnDocumentClick = (element: HTMLDivElement | null, onClickOutside: () => void) => {
    useEffect(() => {
        if (!element) return;

        const onDocumentClick = (e: MouseEvent) => {
            if (!(e.target instanceof Node)) return;

            if (element.contains(e.target)) {
                return;
            }

            onClickOutside();
        };

        document.addEventListener('click', onDocumentClick);

        return () => {
            document.removeEventListener('click', onDocumentClick);
        };
    });
};
