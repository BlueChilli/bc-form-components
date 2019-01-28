import testFormPattern from "../helpers/testFormPattern";
import { TextareaField } from "../components";

testFormPattern("<TextareaField/>", TextareaField, { value: "hello world" });
