import testFormPattern from "../helpers/testFormPattern";
import { SelectField } from "../components";

testFormPattern("<SelectField/>", SelectField, {
  value: 1,
  options: ["apple", "banana", "Foo"]
});
