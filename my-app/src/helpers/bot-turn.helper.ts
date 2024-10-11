import { randomNumber } from "./random-number.helper";

export const botTurnStickCounter = (
  availableStickAmount: number,
  botSticks: number
) => {
  let removedSticksAmount = 0;
  const isBotSticksEven = botSticks % 2 === 0;

  if (isBotSticksEven) {
    if (availableStickAmount >= 2) {
      removedSticksAmount = 2;
    } else {
      removedSticksAmount = 1;
    }
  } else {
    if (availableStickAmount === 1) {
      removedSticksAmount = 1;
    } else if (availableStickAmount >= 3) {
      removedSticksAmount = randomNumber([1, 3]);
    } else {
      removedSticksAmount = 1;
    }
  }

  return removedSticksAmount;
};

export const botTurn = (
    index: number,
    handleTurn: (index: number, isUser: boolean) => void,
  ) => {
      handleTurn(index, false);
  };
