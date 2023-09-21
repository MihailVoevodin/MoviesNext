import {Dispatch, SetStateAction, useEffect} from 'react';
import {EMpaaRating, EReviewsType} from 'Common/Enums';
import {T} from 'Common/Text';

/** Определение цвета заднего фона рецензии в зависимости от типа. */
export const MovieReviewBgColor = (type: string) => {
    if (type === EReviewsType.POSITIVE) {
        return '#daf1db';
    }
    if (type === EReviewsType.NEGATIVE) {
        return '#ffe3e3';
    }
    return '#f2f2f2';
};

/** Определение цвета лайка или дизлайка в зависимости от типа рецензии. */
export const ReviewColors = (type: string, setColors: Dispatch<SetStateAction<string[]>>) => {
    if (type === EReviewsType.POSITIVE) {
        setColors(['green', 'none']);
    }
    if (type === EReviewsType.NEGATIVE) {
        setColors(['none', 'red']);
    }
};

/** Склонение существительных в зависимости от числа. */
export const CountableTexts = (num: number, arr: string[]) => {
    const lastDigit = num % 10;
    if (lastDigit === 1) return arr[0];
    if (lastDigit >= 2 && lastDigit <= 4) return arr[1];
    return arr[2];
};

/** Возвращение строки рейтинга MPAA. */
export const MpaaTooltipText = (str: string) => {
    switch (str) {
        case EMpaaRating.g:
            return T.Movie.MpaaRatng[EMpaaRating.g];
        case EMpaaRating.pg:
            return T.Movie.MpaaRatng[EMpaaRating.pg];
        case EMpaaRating.pg13:
            return T.Movie.MpaaRatng[EMpaaRating.pg13];
        case EMpaaRating.r:
            return T.Movie.MpaaRatng[EMpaaRating.r];
        case EMpaaRating.nc17:
            return T.Movie.MpaaRatng[EMpaaRating.nc17];
    }
};

/** Вычисление цвета рейтинга. */
export const CountRatingBackgroundColor = (digit: number): string => {
    if (digit >= 1 && digit <= 4) {
        return 'red';
    }
    if (digit > 4 && digit < 7) {
        return 'gray';
    }
    return 'green';
};

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

/** Функция получения айди страницы в зависимости от активного таба. */
export const setActiveTabNamePageId = (activeTabName: string, top250: number, top100: number, topAwait: number, findMovies: number) => {
    switch (activeTabName) {
        case T.Pages.MainPages[0].path:
            return top250;
        case T.Pages.MainPages[1].path:
            return top100;
        case T.Pages.MainPages[2].path:
            return topAwait;
        case T.Pages.MainPages[3].path:
            return findMovies;
    }
};
