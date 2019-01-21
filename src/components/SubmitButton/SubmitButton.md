## SubmitButton example

## Simple example with formik

```jsx
const FormikExampleWrapper  = require("../FormikExampleWrapper/FormikExampleWrapper").default;

 <FormikExampleWrapper 
    initialValues={{ test: "" }}
  >
  <SubmitButton
    className="btn btn-primary"
    value="Log In"
    submittingValue="Logging In .."
  />
</FormikExampleWrapper>
```
