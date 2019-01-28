import React from "react";
import { Formik, Form } from "formik";

const FormWrapper = ({
  initialValues,
  validationSchema,
  children,
  onSubmit
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        onSubmit(values);
      }}
      render={() => <Form>{children}</Form>}
    />
  );
};

const createFormikComponentForTests = (
  Component,
  options = {
    props: {},
    initialValue: null
  }
) => {
  class Moo extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        formVals: {}
      };
    }

    render() {
      return (
        <FormWrapper
          initialValues={{ test: options.initialValue || undefined }}
          onSubmit={values => {
            this.setState({ formVals: values });
          }}
        >
          <Component {...options.props || {}} />
          <button type="submit" className="test-submit-button">
            Submit
          </button>
        </FormWrapper>
      );
    }
  }

  // FYI, no need to test with props, the HOC stuff should look after it
  return <Moo />;
};

export default createFormikComponentForTests;
