import {Dispatch, SetStateAction} from 'react';
import {Regulars} from 'Common/Consts';
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
