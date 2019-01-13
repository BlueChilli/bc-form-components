import React from "react";
import { Field, Formik } from "formik";
import PropTypes from "prop-types";
import {
    ElementWrap,
    LabelWrap,
    HelperText,
    ErrorContainer,
    InputWrap
} from "../../utils/Scaffolding";

const TextField = ({
    name,
    label,
    defaultValue = "",
    helperText = "",
    className = "",
    ...rest
}) => {
    return (
        <Formik>
            <ElementWrap className={className} name={name}>
                {label && (
                    <LabelWrap name={name}>
                        <label htmlFor={name}>{label}</label>
                        <HelperText text={helperText} />
                    </LabelWrap>
                )}
                <InputWrap name={name}>
                    <Field
                        id={name}
                        name={name}
                        defaultValue={defaultValue}
                        autoComplete="nope"
                        {...rest}
                    />
                </InputWrap>
                <ErrorContainer name={name} />
            </ElementWrap>
        </Formik>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    helperText: PropTypes.string,
    className: PropTypes.string
};

export default TextField;
