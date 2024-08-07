import React, { useEffect, useState } from "react";
import { AnswerImg } from "../components/answerImg";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/header";
import { Button } from "../components/button";


const StepThree = () => {

  const variants = [
    {
      variantImg: "./img/hearts.png",
      variantId: "variant-1",
      variantText: "Думаю будет весело",
      variantAlt: "laugh",
    },
    {
      variantImg: "./img/hearts.png",
      variantId: "variant-2",
      variantText: "Мне понравиться",
      variantAlt: "hearts",
    },
    {
      variantImg: "./img/smirk.png",
      variantId: "variant-3",
      variantText: "Уверенный в себе",
      variantAlt: "smirk",
    },
    {
      variantImg: "./img/fright.png",
      variantId: "variant-4",
      variantText: "Страх перед обучением",
      variantAlt: "fright",
    },
  ];

  const [variantImg, setVariantImg] = useState(null);
  const [buttonError, setButtonError] = useState(true)
  const navigate = useNavigate();



  useEffect(() => {
    if (variantImg === null) {
      localStorage.setItem("text", "")
      setButtonError(true)
    } else {
      localStorage.setItem("text", JSON.stringify(variantImg))
      setButtonError(false)
    }
  }, [variantImg])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Header headerText={'Какие у вас впечатление после курса'}
              headerType={'h2'} />
            <ul className="emoji-variants">
              {variants.map((elem) => (
                <AnswerImg
                  key={elem.variantId}
                  answerAlt={elem.variantAlt}
                  answerId={elem.variantId}
                  answerImg={elem.variantImg}
                  answerText={elem.variantText}
                  answerChange={() => setVariantImg(elem.variantText)}
                />
              ))};


            </ul>
            <Button buttonClick={() => navigate('/step-four')} isDisabled={buttonError} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
