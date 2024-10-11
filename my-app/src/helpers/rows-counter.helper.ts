import { IStickAmount } from "../interfaces/stick-amount.interface";

export const rowCounter = ({ amount }: IStickAmount) => {
  return Math.floor(Math.sqrt(amount));
};

export const sticksInRowCounter = (rows: number, amount: number) => {
  const sticksInRow = [];
  let sumCheck = 0;

  for (let i = 1; i <= rows; i++) {
    const sticksInThisRow = 2 * i - 1;
    sticksInRow.push(sticksInThisRow);
  }

  for (const sticks of sticksInRow) {
    sumCheck += sticks;
  }

  if (sumCheck < amount) {
    const difference = amount - sumCheck;
    sticksInRow.push(difference);
  }

  return sticksInRow;
};
