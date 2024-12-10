import { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {children}
      {tooltipVisible && <div className="tooltip-item">{text}</div>}
    </div>
  );
};

export default Tooltip;
