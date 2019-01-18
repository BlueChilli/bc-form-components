import React from "react";
import { Field } from "formik";

import {
    ElementWrap,
    LabelWrap,
    HelperText,
    ErrorContainer,
    InputWrap
} from "../../Scaffolding/Scaffolding";

const TextField = props => {
    const { label, name, value, helperText = "", className = "", ...rest } = props;
    return (
        <ElementWrap className={className} name={name}>
            {label && (
                <LabelWrap name={name}>
                    <label htmlFor={name}>{label}</label>
                    <HelperText text={helperText} />
                </LabelWrap>
            )}
            <InputWrap name={name}>
                <Field id={name} name={name} defaultValue={value} autoComplete="nope" {...rest} />
            </InputWrap>
            <ErrorContainer name={name} />
        </ElementWrap>
    );
};

export default TextField;
