export const CountableTexts = (num: number, arr: string[]) => {
    const lastDigit = num % 10;
    if (lastDigit === 1) return arr[0];
    if (lastDigit >= 2 && lastDigit <= 4) return arr[1];
    return arr[2];
};
