## TextField example

### sample yup schema

```jsx static
Yup.string().required("__enter error message to be displayed__"),
```

## Simple example with formik

```jsx
const FormikExampleWrapper  = require("../FormikExampleWrapper/FormikExampleWrapper").default;
const Yup = require("yup");

const textFieldValidationSchema = Yup.object().shape({
  test: Yup.string().required("__enter error message to be displayed__")
});

 <FormikExampleWrapper 
    validationSchema={textFieldValidationSchema}
    initialValues={{ test: "" }}
  >
  <TextField
    label="label test"
    name="test"
    helperText="helper test"
  />
</FormikExampleWrapper>
```
