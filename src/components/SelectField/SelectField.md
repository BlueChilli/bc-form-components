## SelectField example

### sample yup schema

```jsx static
Yup.object({
    value: Yup.string().required("Required"),
    label: Yup.string().required("Required")
  })
    .required("required")
    .nullable()
```

## Simple example with formik

```jsx
const FormikExampleWrapper  = require("../FormikExampleWrapper/FormikExampleWrapper").default;
const Yup = require("yup");

const selectFieldValidationSchema = Yup.object().shape({
  test: Yup.object({
    value: Yup.string().required("Required"),
    label: Yup.string().required("Required")
  })
    .required("required")
    .nullable()
});

 <FormikExampleWrapper 
    validationSchema={selectFieldValidationSchema}
    initialValues={{ test: "" }}
  >
  <SelectField
    label="label test"
    name="test"
    options={[
      {value: "banana", label: "banana label"},
      {value: "apple", label: "apple label"}
    ]}
    helperText="helper test"
  />
</FormikExampleWrapper>
```
