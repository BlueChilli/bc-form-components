import createFormikComponentForTests from "../helpers/createFormikComponentForTests";
import { ElementWrap, InputWrap } from "../Scaffolding/Scaffolding";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import testFormPattern from "../helpers/testFormPattern";
import { DateInputField, FormError } from "../components";
/*
    "ElementWrap",
    "InputWrap",
    "LabelWrap",
    "ErrorContainer",
    "HelperText",
    "className",
    "initalValues"

 */
testFormPattern("<FormError/>", FormError, {}, ["ElementWrap", "className"]);
