import React from "react";
import { Form, Formik } from "formik";
import TextField from "../TextField/TextField";
import SelectField from "../SelectField/SelectField";
import formValidationSchema from "../../FormValidationSchema";

/**
 * Form Validation Schema
```js
const Yup = require("yup");

const formValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

    password: Yup.string().required("Password is required"),

    repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Repeat password is required"),

    accountIntention: Yup.object({
        value: Yup.string().required("Required"),
        label: Yup.string().required("Required")
    })
        .required("Account intention is required")
        .nullable()
});

```
 */

const FormComponent = props => {
    return (
        <Formik
            validationSchema={formValidationSchema}
            initialValues={{
                email: "",
                password: "",
                repeatPassword: "",
                accountIntention: "justLooking",
                acceptTermsConditions: true
            }}
            onSubmit={(values, bag) => {
                console.log("what the heck", values);
            }}
        >
            {({ isSubmitting, ...formValues }) => {
                return (
                    <Form>
                        <TextField
                            label="Email"
                            name="email"
                            type="text"
                            placeholder="johndoe@email.com"
                        />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Repeat Password" name="repeatPassword" type="password" />
                        <SelectField
                            name="accountIntention"
                            label="Which of the following applies to you?"
                            options={[
                                {
                                    value: "manager",
                                    label: "I manage someone who is going to have a baby"
                                },
                                {
                                    value: "havingABaby",
                                    label: "I am going to have a baby"
                                },
                                {
                                    value: "justLooking",
                                    label: "I am just looking"
                                }
                            ]}
                            {...formValues}
                        />

                        <button className="btn btn-primary" disabled={isSubmitting} type="submit">
                            {isSubmitting ? "Loading..." : "next"}
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FormComponent;
