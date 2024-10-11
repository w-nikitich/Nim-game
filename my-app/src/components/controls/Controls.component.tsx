import { IControls } from "../../interfaces/controls.interface";
import { Button } from "../button/Button.component";
import "./Controls.component.scss";

export const Controls: React.FC<IControls> = ({
    handleBotTurn
}: IControls) => {
  return (
    <div className="controls">
      <Button text="Change settings" onClick={() => {}} />
      <Button text="End turn" onClick={handleBotTurn} />
    </div>
  );
};
