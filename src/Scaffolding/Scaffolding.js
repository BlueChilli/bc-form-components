import React from "react";
import { connect, ErrorMessage, getIn } from "formik";
import Show from "../Show/Show.jsx";
import "./Scaffolding.scss";

const DivWithCSSClass = ({ cssClass, className = "", children }) => {
    return <div className={cssClass + " " + className}>{children}</div>;
};

export const ElementWrap = ({ className = "", children }) => (
    <DivWithCSSClass cssClass="form-element" className={className}>
        {children}
    </DivWithCSSClass>
);

export const LabelWrap = ({ className = "", children }) => (
    <DivWithCSSClass cssClass="form-element-label" className={className}>
        {children}
    </DivWithCSSClass>
);

export const HelperText = ({ text, className = "" }) => (
    <DivWithCSSClass cssClass="form-element-helpertext" className={className}>
        {text}
    </DivWithCSSClass>
);

export const InputWrap = connect(({ className = "", name = "", children, formik }) => {
    const error = getIn(formik.errors, name);
    const touched = getIn(formik.touched, name);

    const errorClass = error && touched ? "error" : "";

    return (
        <DivWithCSSClass cssClass={`form-element-input ${errorClass}`} className={className}>
            {children}
        </DivWithCSSClass>
    );
});

//  {children}</div>
export const ErrorContainer = ({ className, name }) => (
    <ErrorMessage
        name={name}
        render={msg => (
            <Show animateOnMount={true}>
                <span className="form-element-error">{msg}</span>
            </Show>
        )}
    />
);
