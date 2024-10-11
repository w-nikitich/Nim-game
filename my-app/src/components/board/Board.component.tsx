import { useEffect } from "react";
import {
  rowCounter,
  sticksInRowCounter,
} from "../../helpers/rows-counter.helper";
import { Controls } from "../controls/Controls.component";
import useHandleTurn from "../hooks/useHandleTurn";
import useStickCounter from "../hooks/useStickCounter";
import { Stick } from "../stick/Stick.component";
import "./Board.component.scss";
import { winnerCounter } from "../../helpers/winner-counter";

export const Board: React.FC = () => {
  const stickAmount = 25;
  const rowsAmount = rowCounter({ amount: stickAmount });
  const arrayOfRows = sticksInRowCounter(rowsAmount, stickAmount);
  const stickIndexesArray: Array<number> = [];
  const {
    isRemovedArray,
    availableStickAmount,
    arrayOfExistingStickIndexes,
    handleStickRemove,
    userSticks,
    isDisabled,
    winner,
    winnerCount,
  } = useStickCounter({ amount: stickAmount, arrayOfStickIndexes: stickIndexesArray });

  const { handleBotTurn, botSticks } = useHandleTurn({
    availableStickAmount,
    handleStickRemove,
    availableSticksIndexes: arrayOfExistingStickIndexes,
  });

  useEffect(() => {
    if (availableStickAmount <= 0) {
      winnerCount(botSticks, userSticks);
    }
  }, [availableStickAmount])

  return (
    <div className="board">
      {winner !== '' && <p className="winner">Winner: {winner}</p>}

      {availableStickAmount !== 0 && arrayOfRows.map((row, index) => {
        const sticks = [];
        for (let i = 0; i < row; i++) {
          const stickIndex = index * row + i;
          stickIndexesArray.push(stickIndex);
          sticks.push(
            <Stick
              key={stickIndex}
              isRemoved={isRemovedArray[stickIndex]}
              onClick={() => handleStickRemove(stickIndex, true)}
            />
          );
        }
        return (
          <div key={index} className={(isDisabled) ? 'board-row disabled' : 'board-row'} aria-disabled={isDisabled}>
            {sticks}
          </div>
        );
      })}

      <div className="game-status">
        <p>Bot's stiks: {botSticks}</p>
        <p>Your stiks: {userSticks}</p>
      </div>

      <Controls
        handleBotTurn={handleBotTurn}
      />
    </div>
  );
};
