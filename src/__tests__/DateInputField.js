import testFormPattern from "../helpers/testFormPattern";
import { DateInputField } from "../components";

testFormPattern("<DateInputField/>", DateInputField, {
  value: "2008-09-15T15:53:00"
});
