import React from "react";
import { Field } from "formik";
import { ElementWrap, HelperText, ErrorContainer } from "../../Scaffolding/Scaffolding";

const RadioButton = props => {
    const { className, name, initialValue, options, helperText, ...rest } = props;

    return (
        <React.Fragment>
            {options.map((option, index) => {
                return (
                    <ElementWrap key={`${option.value}_${index}`} className={className} name={name}>
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
                    </ElementWrap>
                );
            })}
            <HelperText text={helperText} />
            <ErrorContainer name={name} />
        </React.Fragment>
    );
};

export default RadioButton;
