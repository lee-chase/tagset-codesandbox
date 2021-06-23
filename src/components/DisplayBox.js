import React, {useState, useRef} from "react";

import "./_display-box.scss";

export const DisplayBox = ({ children }) => {
  const sliderMin = 0;
  const sliderMax = 100;
  const displayBox = useRef(null);
  const [sliderValue, setSliderValue] = useState((sliderMin + sliderMax) / 2);

  const handleSliderChange = (ev) => {
    displayBox.current.style.setProperty('--content-width', `${ev.target.value}%`);
    setSliderValue(ev.target.value);
  };

  return (
    <div className="display-box" ref={displayBox}>
      <div className="display-box__header">
        <label id="display-box-label" aria-label="display-box__slider" class="display-box__label" >Adjust display box width</label>
        <input
          type="range"
          min={sliderMin}
          max={sliderMax}
          value={sliderValue}
          id="display-box__slider"
          class="display-box__slider"
          onInput={handleSliderChange}
        />
        <div className="display-box__content">{children}</div>
      </div>
    </div>
  );
};
