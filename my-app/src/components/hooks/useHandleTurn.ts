import { useState } from "react";
import { botTurn, botTurnStickCounter } from "../../helpers/bot-turn.helper";
import { IBotTurn } from "../../interfaces/bot-turn.interface";
import { randomNumber } from "../../helpers/random-number.helper";

export default function useHandleTurn({
  availableStickAmount,
  handleStickRemove,
  availableSticksIndexes,
}: IBotTurn) {
  const [botSticks, setBotSticks] = useState<number>(0);

  const handleBotTurn = () => {
    const removedSticksAmount = botTurnStickCounter(
      availableStickAmount,
      botSticks
    );
    for (let i = 1; i <= removedSticksAmount; i++) {
      const index = randomNumber(availableSticksIndexes);
      botTurn(index, handleStickRemove);
    }
    
    setBotSticks((prev) => prev + removedSticksAmount);
  };

  return { handleBotTurn, botSticks };
}
