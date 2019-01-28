import testFormPattern from "../helpers/testFormPattern";
import { TextField } from "../components";

testFormPattern("<TextField/>", TextField, { value: "hello world" });
