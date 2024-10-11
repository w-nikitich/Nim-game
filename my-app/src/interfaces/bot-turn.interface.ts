export interface IBotTurn {
  availableStickAmount: number;
  handleStickRemove: (index: number, isUser: boolean) => void;
  availableSticksIndexes: Array<number>;
}
