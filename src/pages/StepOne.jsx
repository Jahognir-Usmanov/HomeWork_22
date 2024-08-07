import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
const StepOne = () => {
  const navigate = useNavigate()
  const [buttonError, setButtonError] = useState(true);

  const handleClick = () =>{
    navigate('/step-two')
  }

  useEffect(() => {
    setButtonError(false)
  })
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1}/>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <Button isDisabled={buttonError} buttonClick={handleClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
