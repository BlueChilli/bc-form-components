import React from "react";
import { Form, Formik } from "formik";
import TextField from "../TextField/TextField";
import SelectField from "../SelectField/SelectField";
import formValidationSchema from "../../FormValidationSchema";
import CheckboxField from "../Checkbox/Checkbox";
import DateInputField from "../DatePickerInput/DateInputField";
import RadioButton from "../RadioButton/RadioButton";

/**
 * Form Validation Schema
```js
import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

    password: Yup.string().required("Password is required"),

    repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Repeat password is required"),

    // checkbox validation hack
    acceptTermsConditions: Yup.boolean().oneOf([true], "Please accept terms and conditions"),

    gender: Yup.string().required("Please select one of the gender"),

    accountIntention: Yup.object({
        value: Yup.string().required("Required"),
        label: Yup.string().required("Required")
    })
        .required("Account intention is required")
        .nullable()
});

export default formValidationSchema;
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
                acceptTermsConditions: false,
                desiredDate: "",
                gender: ""
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

                        <CheckboxField
                            name="acceptTermsConditions"
                            label="Please accept terms and conditions"
                            value={false}
                        />

                        <RadioButton
                            name="gender"
                            options={[
                                { label: "Male", value: "m" },
                                { label: "Female", value: "f" }
                            ]}
                            initialValue={formValues.values.gender}
                        />

                        <DateInputField
                            name="desiredDate"
                            label="The desired date for whatever it is"
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
