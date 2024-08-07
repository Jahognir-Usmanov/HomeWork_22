import React from "react";

export const AnswerDigital =  ({digitalId, digitalAnswer, digitalChange}) =>(
    <li className="variant-wrapper">
    <input required type="radio" name="variant" 
    id={digitalId} onChange={digitalChange}/>
    <label htmlFor={digitalId}>{digitalAnswer}</label>
  </li>
)