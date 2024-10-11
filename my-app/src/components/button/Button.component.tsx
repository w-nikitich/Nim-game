import { IButton } from "../../interfaces/button.interface";
import "./Button.component.scss";

export const Button: React.FC<IButton> = ({ text, onClick }: IButton) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};
