import React from "react";
import { connect, ErrorMessage, getIn } from "formik";
import styled from "styled-components";
import "./Scaffolding.scss";

// const DivWithCSSClass = ({ cssClass, className = "", children }) => {
//   return <div className={cssClass + " " + className}>{children}</div>;
// };

const DivWithCSSClass = styled.div``;

// export const ElementWrap = ({ className = "", children }) => (
//   <DivWithCSSClass cssClass="form-element" className={className}>
//     {children}
//   </DivWithCSSClass>
// );

export const ElementWrap = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const LabelWrap = connect(
  ({ className = "", children, label = undefined }) => {
    if (label === undefined) return null;
    return (
      <DivWithCSSClass className={className + " form-element-label"}>
        {children}
      </DivWithCSSClass>
    );
  }
);

export const HelperText = ({ text, className = "" }) => (
  <DivWithCSSClass cssClass="form-element-helpertext" className={className}>
    {text}
  </DivWithCSSClass>
);

export const InputWrap = connect(
  ({ className = "", name = "", children, formik }) => {
    const error = getIn(formik.errors, name);
    const touched = getIn(formik.touched, name);

    const errorClass = error && touched ? "error" : "";

    return (
      <DivWithCSSClass
        cssClass={`form-element-input ${errorClass}`}
        className={className}
      >
        {children}
      </DivWithCSSClass>
    );
  }
);

export const ErrorContainer = ({ className, name }) => (
  <ErrorMessage
    name={name}
    render={msg => <span>{msg.length > 0 ? msg : msg.value}</span>}
  />
);
