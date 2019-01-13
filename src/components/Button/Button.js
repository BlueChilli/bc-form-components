import React, { useState } from "react";
import { ElementWrap, InputWrap } from "../../utils/Scaffolding";

const Button = props => {
    const {
        name,
        className = "",
        value = "Submit",
        submittingValue = "Submitting",
        isSubmitting,
        isValid
    } = props;

    const [buttonVal, setButtonVal] = useState(value);

    const onSubmit = () => setButtonVal(submittingValue);

    return (
        <ElementWrap name={name}>
            <InputWrap name={name}>
                <button
                    className={className}
                    onClick={onSubmit}
                    disabled={isSubmitting || !isValid}
                    type="submit"
                >
                    {buttonVal}
                </button>
            </InputWrap>
        </ElementWrap>
    );
};

Button.defaultProps = {
    isSubmitting: false,
    isValid: true
};

export default Button;
