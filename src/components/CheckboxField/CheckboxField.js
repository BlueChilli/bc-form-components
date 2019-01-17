import React from "react";
import { Field } from "formik";

import {
  ElementWrap,
  HelperText,
  ErrorContainer
} from "../../Scaffolding/Scaffolding";

function CheckboxField(props) {
  const {
    label,
    name,
    helperText = "",
    className = "",
  } = props;

  return (
    <ElementWrap className={className} name={name}>
      <Field
        className={`checkbox ${className}`}
        name={name}
        type="checkbox"
      />
      <label className={`form-element-label ${className}`} htmlFor={name}>
        {label || name}
      </label>
      <HelperText text={helperText} />
      <ErrorContainer name={name} />
    </ElementWrap>
  );
}

export default CheckboxField;