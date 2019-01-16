import React from "react";
import { Formik, Form } from "formik";

import Debug from "../Debug/Debug";

const FormikExampleWrapper = ({
  initialValues,
  validationSchema,
  children
}) => {
  return (
    <div>
      <pre>
        {JSON.stringify(initialValues, null, 2)}
      </pre>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
    </div>
  );
};

export default FormikExampleWrapper;
