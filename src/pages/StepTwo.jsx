import React, { useEffect, useState } from "react";
import { AnswerItem } from "../components/answerItem";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/header";
import { Button } from "../components/button";


const StepTwo = () => {
  const variants = [
    {
      variantId: "variant-1",
      variantText: "Frontend",
    },
    {
      variantId: "variant-2",
      variantText: "Python",
    },
    {
      variantId: "variant-3",
      variantText: "IOS/Android разработчик",
    },
    {
      variantId: "variant-4",
      variantText: "DATA Аналитик",
    },
  ];
  const [courseVariant, setCourseVariants] = useState(null);
  const navigate = useNavigate();
  const [buttonError, setButtonError] = useState(true)

  useEffect(() => {
    if (courseVariant === null) {
      localStorage.setItem("course", "")
      setButtonError(true)
    } else {
      localStorage.setItem("course", JSON.stringify(courseVariant))
      setButtonError(false)
    }
  })
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Header
              headerText="На какой курс вы запишитесь ?"
              headerType="h2"
            />
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerItem
                  answerText={elem.variantText}
                  id={elem.variantId}
                  key={elem.variantId}
                  answerChange={() => setCourseVariants(elem.variantText)}
                />
              ))}
            </ul>
            <Button buttonClick={() => navigate("/step-three")} isDisabled={buttonError} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
