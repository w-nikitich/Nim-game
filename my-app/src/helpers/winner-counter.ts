export const winnerCounter = (botSticks: number, userSticks: number) => {
  const isBotSticksEven = botSticks % 2 === 0;
  const isUserSticks = userSticks % 2 === 0;
  const possibleWinners = ["bot", "user", "draw"];

  if (isBotSticksEven && !isUserSticks) {
    return possibleWinners[0];
  } else if (isUserSticks && !isBotSticksEven) {
    return possibleWinners[1];
  } else {
    return possibleWinners[2];
  }
};
