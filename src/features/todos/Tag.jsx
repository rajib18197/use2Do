import { useState } from "react";
import styles from "./Tag.module.css";

export default function Tag({ bgColor, textColor, children }) {
  // NOTE: Here we don't need setter function, We are only using state to store the passed [bgColor and textColor] props and we don't need update the state. We do it because colors will not be reset everytime component gets re-rendered but only initial render which is we want in this case as we don't want our colors to change everytime this component gets re-rendered. So we are doing mirroring props in state variable here which is perfectly fine in this situation.

  const [tagBgColor] = useState(bgColor);
  const [tagTextColor] = useState(textColor);

  return (
    <li>
      <span
        className={`${styles.tag}`}
        style={{ backgroundColor: `var(${tagBgColor})`, color: tagTextColor }}
      >
        {children}
      </span>
    </li>
  );
}
