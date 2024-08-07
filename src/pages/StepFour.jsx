import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";
import { AnswerDigital } from "../components/answerDigital";
import { Button } from "../components/button";

const StepFour = () => {

  const variants = [
    {
      variantId:"variant-1",
      variantAnswer:1,

    },
    {
      variantId:"variant-2",
      variantAnswer:2,

    },
    {
      variantId:"variant-3",
      variantAnswer:3,

    },
    {
      variantId:"variant-4",
      variantAnswer:4,

    },
    {
      variantId:"variant-5",
      variantAnswer:5,
    }
  ]

  const [variantDigital, setVariantDigital] = useState(null);
  const [buttonError, setButtonError] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    if(variantDigital === null){
      localStorage.setItem('answer', '')
      setButtonError(true)
    }else{
      localStorage.setItem('answer', JSON.stringify(variantDigital))
      setButtonError(false)
    }
  }, [variantDigital])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
            <ProgressBar currentStep={4}/>

          <div className="question">
            <Header headerText={'Оцените курс от 1 до 5'}
            headerType={'h2'}/>
            <ul className="level-variants">
              {variants.map((e) => (
                <AnswerDigital
                key={e.variantId}
                digitalId={e.variantId}
                digitalAnswer={e.variantAnswer}
                digitalChange={() => setVariantDigital(e.variantAnswer)}/>
                
                
              ))}
            </ul>
            <Button buttonClick={() => navigate('/thanks')} isDisabled={buttonError}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
