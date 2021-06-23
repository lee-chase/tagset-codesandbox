import React from "react";

import "./display-box.scss";

export const DisplayBox = ({ children }) => {
  return (
    <div className="display-box">
      <div className="display-box__header">
        <label id="display-box-label">Adjust display box width</label>
        <input
          type="range"
          min="20"
          max="1000"
          value="10"
          labelledby="display-box-label"
          class="display-blox__sizer"
        />
        <div className="display-box__content">{children}</div>
      </div>
    </div>
  );
};
