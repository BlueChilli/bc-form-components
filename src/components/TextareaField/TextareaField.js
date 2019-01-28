import React from "react";
import { connect } from "formik";

import {
  ElementWrap,
  LabelWrap,
  HelperText,
  ErrorContainer,
  InputWrap
} from "../../Scaffolding/Scaffolding";

function TextareaField({
  label,
  name,
  helperText = "",
  className = "",
  placeholder = "",
  formik
}) {
  const { setFieldValue, setFieldTouched } = formik;
  const value = formik.values[name];

  return (
    <ElementWrap className={className}>
      <LabelWrap name={name} label={label}>
        <label htmlFor={name}>{label || name}</label>
        <HelperText text={helperText} />
      </LabelWrap>
      <InputWrap name={name}>
        <textarea
          name={name}
          value={value}
          onBlur={() => setFieldTouched(name, true)}
          onChange={e => setFieldValue(name, e.target.value)}
          placeholder={placeholder}
        />
      </InputWrap>
      <ErrorContainer name={name} />
    </ElementWrap>
  );
}

export default connect(TextareaField);
