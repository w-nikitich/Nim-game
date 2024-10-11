import React from "react";
import { IStickAmount } from "../../interfaces/stick-amount.interface";
import { winnerCounter } from "../../helpers/winner-counter";

export default function useStickCounter({
  amount,
  arrayOfStickIndexes = [],
}: IStickAmount) {
  const [availableStickAmount, setAvailableStickAmount] =
    React.useState<number>(amount);
  const [userClickCounter, setUserClickCounter] = React.useState<number>(0);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [userSticks, setUserSticks] = React.useState<number>(0);
  const [arrayOfExistingStickIndexes, setArrayOfExistingStickIndexes] =
    React.useState<Array<number>>(arrayOfStickIndexes);
  const [isRemovedArray, setIsRemovedArray] = React.useState(
    Array(amount).fill(false)
  );
  const [winner, setWinner] = React.useState<string>("");

  const winnerCount = (botSticks: number, userSticks: number) => {
    const countedWinner = winnerCounter(botSticks, userSticks);
    setWinner(countedWinner);
  };

  const handleStickRemove = (index: number, isUser: boolean) => {
    if (isUser) {
      setUserSticks((prev) => prev + 1);
      setUserClickCounter((prev) => prev + 1);

      if (userClickCounter === 2) {
        setIsDisabled(true);
      }
    } else {
      setIsDisabled(false);
      setUserClickCounter(0);
    }

    setIsRemovedArray((prev) => {
      const newArray = [...prev];
      newArray[index] = true;
      return newArray;
    });

    setArrayOfExistingStickIndexes((prev) => {
      const newArrayOfExistingIndexes = prev.filter(
        (value: number) => value !== index
      );
      return newArrayOfExistingIndexes;
    });

    setAvailableStickAmount((prev) => prev - 1);
  };

  return {
    isRemovedArray,
    availableStickAmount,
    handleStickRemove,
    arrayOfExistingStickIndexes,
    userSticks,
    isDisabled,
    winner,
    winnerCount,
  };
}
