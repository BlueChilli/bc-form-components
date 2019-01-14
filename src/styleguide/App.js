import React from "react";
import { Formik } from "formik";

const Wrapper = props => {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                repeatPassword: "",
                accountIntention: "justLooking",
                acceptTermsConditions: false,
                desiredDate: "",
                fruit: ""
            }}
            onSubmit={(values, bag) => {
                console.log("what the heck", values);
            }}
        >
            {formValues => {
                return <div>{props.children}</div>;
            }}
        </Formik>
    );
};

export default Wrapper;
