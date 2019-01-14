import React from "react";
import {
    ElementWrap,
    LabelWrap,
    HelperText,
    ErrorContainer,
    InputWrap
} from "../../Scaffolding/Scaffolding";
import { Field } from "formik";

const TextField = props => {
    const { label, name, value, helperText = "", className = "", ...rest } = props;
    return (
        <ElementWrap className={className}>
            {label && (
                <LabelWrap>
                    <label htmlFor={name}>{label}</label>
                    <HelperText text={helperText} />
                </LabelWrap>
            )}
            <InputWrap>
                <Field id={name} name={name} defaultValue={value} {...rest} />
            </InputWrap>
            <ErrorContainer name={name} />
        </ElementWrap>
    );
};

export default TextField;
