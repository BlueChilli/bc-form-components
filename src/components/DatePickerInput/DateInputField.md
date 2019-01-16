## dateinput example

### sample yup schema

```jsx static
...
Yup.string().required("__enter error message to be displayed__"),
...
```

```jsx
const FormikExampleWrapper  = require("../FormikExampleWrapper/FormikExampleWrapper").default;
 <FormikExampleWrapper defaultValues={{ test: "" }}>
  <DateInputField
    label="test"
    name="test"
    helperText="test"
  />
</FormikExampleWrapper>
```
