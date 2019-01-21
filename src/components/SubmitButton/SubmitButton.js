import React from "react";
import { connect } from "formik";

import { ElementWrap, InputWrap } from "../../Scaffolding/Scaffolding";

function SubmitButton(props) {
  const {
    name,
    className = "",
    value = "Submit",
    submittingValue = "Submitting"
  } = props;

  const { isSubmitting, isValid } = props.formik;

  return (
    <ElementWrap name={name}>
      <InputWrap name={name}>
        <button
          className={className}
          disabled={isSubmitting || !isValid}
          type="submit"
        >
          {!isSubmitting ? value : submittingValue}
        </button>
      </InputWrap>
    </ElementWrap>
  );
}

export default connect(SubmitButton);
