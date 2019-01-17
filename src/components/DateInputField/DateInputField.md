## dateinput example

### sample yup schema

```jsx static
Yup.date().required("__enter error message to be displayed__"),
```

## Simple example

```jsx
const FormikExampleWrapper  = require("../FormikExampleWrapper/FormikExampleWrapper").default;
const Yup = require("yup");

const dateInputFieldValidationSchema = Yup.object().shape({
  test: Yup.date().required("__enter error message to be displayed__")
});

 <FormikExampleWrapper 
    validationSchema={dateInputFieldValidationSchema}
    initialValues={{ test: "" }}
  >
  <DateInputField
    label="label test"
    placeholder="pick a day..."
    name="test"
    helperText="helper test"
  />
</FormikExampleWrapper>
```
