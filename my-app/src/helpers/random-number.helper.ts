export const randomNumber = (arrayOfNumbers: Array<number>) => {
    const randomIndex = Math.floor(Math.random() * arrayOfNumbers.length);
    return arrayOfNumbers[randomIndex];
}