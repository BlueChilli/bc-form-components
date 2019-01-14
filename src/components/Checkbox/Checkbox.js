import React from "react";
import { Field } from "formik";

import { ElementWrap, HelperText, ErrorContainer } from "../../Scaffolding/Scaffolding";

export default function CheckboxField(props) {
    const { label, name, value, helperText = "", className = "", ...rest } = props;

    return (
        <ElementWrap className={className} name={name}>
            <Field
                className={`checkbox ${className}`}
                name={name}
                type="checkbox"
                value={value}
                {...rest}
            />
            <label className={`form-element-label ${className}`} htmlFor={name}>
                {label || name}
            </label>
            <HelperText text={helperText} />
            <ErrorContainer name={name} />
        </ElementWrap>
    );
}
