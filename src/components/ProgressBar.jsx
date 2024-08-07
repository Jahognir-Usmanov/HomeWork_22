import React from "react";

export const ProgressBar  = ({currentStep}) => {
    const variants = [1,2,3,4];
    return(
        <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
                {variants.map((e,i) => (
                    <div
                        key={i}
                        className={`indicator__unit indicator__unit-${e} 
                        ${currentStep > i && '_active'
                            
                        }`}></div>
                ))}

            </div>
          </div>
    )
}
