import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { ElementWrap, HelperText, ErrorContainer, InputWrap } from "../../Scaffolding/Scaffolding";

/**
```js
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
```
 */

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
                                checked={initialValue === option.value}
                                {...rest}
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

RadioButton.propTypes = {
    // Name given to radio button
    name: PropTypes.string.isRequired,
    // Key-value pair that we want to display
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ),
    // Selected initial value for the radio button
    initialValue: PropTypes.string.isRequired
};

export default RadioButton;
