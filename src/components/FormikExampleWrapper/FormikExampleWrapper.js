import React from "react";
import { Formik, Form } from "formik";
import { ThemeProvider } from "styled-components";

import Debug from "../Debug/Debug";

const theme = {
  colours: {
    primary: "#bcd8e2",
    primaryLight: "green",
    primaryDark: "#24485c",
    secondary: "#e0b581",
    secondaryLight: "rgba(238, 231 227, 0.5)",
    secondaryDark: "yellow",
    neutralDarker: "orange",
    neutrayDark: "grey",
    neutral: "lightgrey",
    neutralLight: "peru",
    neutralLighter: "purple",
    neutralLightest: "cyan"
  },
  fontFamily: "arial"
}

const FormikExampleWrapper = ({
  initialValues,
  validationSchema,
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default FormikExampleWrapper;
