import React, { useEffect } from "react";
import { connect } from "formik";
import { ElementWrap } from "../../Scaffolding/Scaffolding";
import Show from "../../Show/Show";

function FormError(props) {
  const { className = "" } = props;
  const { status, dirty, values, setStatus } = props.formik;

  useEffect(
    () => {
      setStatus(false);
    },
    [values]
  );

  return (
    <ElementWrap className={className} name="submit-button">
      <Show show={dirty && status}>
        <div className={"form-element-error " + className}>{status}</div>
      </Show>
    </ElementWrap>
  );
}

export default connect(FormError);
