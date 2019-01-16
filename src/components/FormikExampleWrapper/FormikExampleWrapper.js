import React from "react";
import { Formik, Form } from "formik";

import Debug from "../Debug/Debug";

const FormikExampleWrapper = ({ initialValues, children }) => {
  return (
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        render={() => (
          <Form>
            {children}
            <Debug />
          </Form>
        )}
      />
  );
}

export default FormikExampleWrapper;
