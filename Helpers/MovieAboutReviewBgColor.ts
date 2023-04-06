export const MovieAboutReviewBgColor = (type: string) => {
    if (type === 'POSITIVE') {
        return '#daf1db';
    }
    if (type === 'NEGATIVE') {
        return '#ffe3e3';
    }
    return '#f2f2f2';
};
