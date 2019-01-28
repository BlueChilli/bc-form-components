import React from "react";
import { Field } from "formik";

import {
  ElementWrap,
  HelperText,
  ErrorContainer,
  LabelWrap,
  InputWrap
} from "../../Scaffolding/Scaffolding";

function CheckboxField(props) {
  const { label, name, helperText = "", className = "" } = props;

  return (
    <ElementWrap className={className} name={name}>
      <InputWrap name={name}>
        <Field
          className={`checkbox ${className}`}
          name={name}
          id={name}
          type="checkbox"
        />
      </InputWrap>
      <LabelWrap name={name} label={label}>
        <label className={`form-element-label ${className}`} htmlFor={name}>
          {label || name}
        </label>
        <HelperText text={helperText} />
      </LabelWrap>

      <ErrorContainer name={name} />
    </ElementWrap>
  );
}

export default CheckboxField;
