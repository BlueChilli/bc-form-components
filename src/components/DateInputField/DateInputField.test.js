import React from "react";
import { shallow } from "enzyme";
import DateInputField from "./DateInputField";

test("DateInputField", () => {
  const dateInputField = shallow(<DateInputField labelOn="On" labelOff="Off" />);

  expect(dateInputField.text()).toEqual('Off');

  dateInputField.find('input').simulate('change');

  expect(dateInputField.text()).toEqual('On');
});