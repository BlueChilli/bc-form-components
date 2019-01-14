import React from "react";
import { Field } from "formik";
import { ElementWrap } from "../../Scaffolding/Scaffolding";

const RadioButton = props => {
    const { className, name, value, options, ...rest } = props;

    console.log("default Value", value);

    return options.map((option, index) => {
        return (
            <ElementWrap key={`${option.value}_${index}`} className={className} name={name}>
                <Field
                    className={`checkbox ${className}`}
                    name={name}
                    type="radio"
                    value={option.value}
                    {...rest}
                    checked={value === option.value}
                />
                <label className={`form-element-label ${className}`} htmlFor={name}>
                    {option.label || name}
                </label>
            </ElementWrap>
        );
    });
};

export default RadioButton;
