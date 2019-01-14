import React from "react";
import { Field } from "formik";
import { ElementWrap, HelperText, ErrorContainer, InputWrap } from "../../Scaffolding/Scaffolding";

const RadioButton = props => {
    const { className, name, initialValue, options, helperText, ...rest } = props;

    return (
        <ElementWrap className={className} name={name}>
            <InputWrap>
                {options.map((option, index) => {
                    return (
                        <div className="checkbox" key={`${option.value}_${index}`}>
                            <Field
                                className={`checkbox ${className}`}
                                name={name}
                                type="radio"
                                value={option.value}
                                {...rest}
                                checked={initialValue === option.value}
                            />
                            <label className={`form-element-label ${className}`} htmlFor={name}>
                                {option.label || name}
                            </label>
                        </div>
                    );
                })}
                <HelperText text={helperText} />
                <ErrorContainer name={name} />
            </InputWrap>
        </ElementWrap>
    );
};

export default RadioButton;
