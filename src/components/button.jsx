import React from "react";

export const Button = ({
  buttonText = "Далее",
  isDisabled,
  buttonClick,
  buttonType = "button",
}) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType}
      onClick={buttonClick}
      id="next-btn"
    >
      {buttonText}
    </button>
  );
};
