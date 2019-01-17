## CheckboxField example

### sample yup schema

```jsx static
Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
```

## Simple example

```jsx
const FormikExampleWrapper  = require("../FormikExampleWrapper/FormikExampleWrapper").default;
const Yup = require("yup");

const CheckboxFieldValidationSchema = Yup.object().shape({
  test: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
}); 

 <FormikExampleWrapper 
    validationSchema={CheckboxFieldValidationSchema}
    initialValues={{ test: true }}
  >
  <CheckboxField
    label="test"
    name="test"
    helperText="helper text"
  />
</FormikExampleWrapper>
```
