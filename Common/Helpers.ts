import {EReviewsType} from 'Common/Enums';

export const MovieReviewBgColor = (type: string) => {
    if (type === EReviewsType.POSITIVE) {
        return '#daf1db';
    }
    if (type === EReviewsType.NEGATIVE) {
        return '#ffe3e3';
    }
    return '#f2f2f2';
};

export const CountableTexts = (num: number, arr: string[]) => {
    const lastDigit = num % 10;
    if (lastDigit === 1) return arr[0];
    if (lastDigit >= 2 && lastDigit <= 4) return arr[1];
    return arr[2];
};
