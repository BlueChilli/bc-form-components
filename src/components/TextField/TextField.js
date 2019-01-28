import React from "react";
import { connect, Field } from "formik";

import {
  ElementWrap,
  LabelWrap,
  HelperText,
  ErrorContainer,
  InputWrap
} from "../../Scaffolding/Scaffolding";

const TextField = props => {
  const { label, name, helperText = "", className = "", ...rest } = props;

  return (
    <ElementWrap className={className} name={name}>
      <LabelWrap name={name} label={label}>
        <label htmlFor={name}>{label}</label>
        <HelperText text={helperText} />
      </LabelWrap>

      <InputWrap name={name}>
        <Field id={name} name={name} autoComplete="nope" {...rest} />
      </InputWrap>
      <ErrorContainer name={name} />
    </ElementWrap>
  );
};

export default connect(TextField);
