import { useEffect } from "react";

function Step({ index, name, isActive, onClick, isDirty }) {
  return (
    <div className="step" onClick={onClick}>
      <div
        className={`step-index ${isActive ? "active-step" : ""}  ${
          isDirty ? "dirty-step" : ""
        }`}
      >
        {index}
      </div>
      <div className="step-name">{name}</div>
    </div>
  );
}

export default Step;
