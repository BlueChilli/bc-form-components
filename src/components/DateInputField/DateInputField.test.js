import React from "react";
import { shallow } from "enzyme";
import DateInputField from "./DateInputField";

test("DateInputField", () => {
  const dateInputField = shallow(<DateInputField name="test" />);
  console.log(dateInputField)
  expect(dateInputField).toBeTruthy();
});