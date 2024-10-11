import { useEffect, useRef } from "react";
import { IStick } from "../../interfaces/stick.interface";
import "./Stick.component.scss";

export const Stick: React.FC<IStick> = ({ isRemoved, onClick }: IStick) => {
  const stickRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (isRemoved) {
      const span = stickRef.current;
      span?.classList.add("removed");
    }
  }, [isRemoved]);

  return <span className="stick" onClick={onClick} ref={stickRef}></span>;
};
