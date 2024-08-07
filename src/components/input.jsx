import React from "react";

export const Input = ({inputText,  inputPlaceholder, 
    inputType, inputId, inputName, errorText, inputPattern,
    inputValue, inputChange, hasError, }) => {
    return (
        <label className={`input-wrapper _errorv ${hasError && '_error'}`} htmlFor="username">
            {inputText}
            <input
                required
                type={inputType}
                name={inputName}
                id={inputId}
                placeholder={inputPlaceholder}
                pattern={inputPattern}
                value={inputValue}
                onChange={(event) => inputChange(event.target.value)}
            />
            { hasError && <span id="error-message">{errorText}</span>}
        </label>
        
    )
}