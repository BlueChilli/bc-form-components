import React from "react";
import { connect } from "formik";
import styled from "styled-components";

import { ElementWrap, InputWrap } from "../../Scaffolding/Scaffolding";

const Button = styled.button`
  font-size: 18px;
  line-height: 1.56;
  border-radius: 2px;
  padding: 8px 32px;
  opacity: 1;
  transition: 500ms opacity;
  cursor: pointer;
  background: ${({theme}) => theme.colours.neutralLighter};
  border: 2px solid ${({theme}) => theme.colours.neutralLighter};
  color: ${({theme}) => theme.colours.secondaryDark};
  border: none;

  &:disabled {
      cursor: not-allowed;
      transition: 500ms opacity;
      opacity: 0.4;
  }
  &:hover {
      background: ${props => props.theme.colours.neutralLighter}
      transition: 300ms background;
  }
`;

function SubmitButton(props) {
  const {
    name,
    className = "",
    value = "Submit",
    submittingValue = "Submitting"
  } = props;

  const { isSubmitting, isValid } = props.formik;

  return (
    <ElementWrap className={className} name={name}>
      <InputWrap name={name}>
        <Button
          className={className}
          disabled={isSubmitting || !isValid}
          type="submit"
        >
          {!isSubmitting ? value : submittingValue}
        </Button>
      </InputWrap>
    </ElementWrap>
  );
}

export default connect(SubmitButton);
