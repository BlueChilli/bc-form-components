import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

    password: Yup.string().required("Password is required"),

    repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Repeat password is required"),

    // role: Yup.string().required("Role is required"),

    // firstName: Yup.string().required("First name is required"),

    // lastName: Yup.string().required("Last name is required"),

    // acceptTermsConditions: true,

    accountIntention: Yup.object({
        value: Yup.string().required("Required"),
        label: Yup.string().required("Required")
    })
        .required("Account intention is required")
        .nullable()
});

export default formValidationSchema;
