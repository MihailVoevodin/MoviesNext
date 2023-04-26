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
