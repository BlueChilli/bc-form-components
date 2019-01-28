import React from "react";
import { mount } from "enzyme";
import createFormikComponentForTests, {
  createFormikComponentWithOutFormik
} from "./createFormikComponentForTests";

import {
  ElementWrap,
  ErrorContainer,
  HelperText,
  InputWrap,
  LabelWrap
} from "../Scaffolding/Scaffolding";

const runNextTick = fn => {
  fn();
  return new Promise(resolve => setTimeout(resolve, 2));
};

const testFormPattern = async (
  name,
  FormField,
  options = {},
  includeTests = [
    "ElementWrap",
    "InputWrap",
    "LabelWrap",
    "ErrorContainer",
    "HelperText",
    "className",
    "initalValues"
  ]
) => {
  describe(`FormField Standardised Tests for ${name}`, () => {
    let wrapper;

    afterAll(() => {
      return new Promise(resolve => setTimeout(resolve, 2));
    });

    beforeEach(() => {
      wrapper = mount(
        createFormikComponentForTests(FormField, {
          props: {
            label: "label test",
            placeholder: "pick a day...",
            name: "test",
            helperText: "Helper Test",
            options: options.options
          }
        })
      );
    });

    /*
                Check ElementWrap Component
                 */

    if (includeTests.includes("ElementWrap")) {
      it("ElementWrap Exists", () => {
        const EW = wrapper.find(ElementWrap);
        expect(EW.find(ElementWrap).length).toEqual(1);
      });

      it("Correct ElementWrap props", () => {
        expect(wrapper.find(ElementWrap).prop("className")).toBeDefined();
      });
    }

    /*
               Check InputWrap Component
                */
    if (includeTests.includes("InputWrap")) {
      it("InputWrap Exists", () => {
        expect(wrapper.find(InputWrap).length).toEqual(1);
      });

      it("Correct InputWrap props", () => {
        expect(wrapper.find(InputWrap).prop("name")).toBeDefined();
      });
    }
    /*
               Check LabelWrap Component
                */

    if (includeTests.includes("LabelWrap")) {
      it("LabelWrap Exists", () => {
        expect(wrapper.find(LabelWrap).length).toEqual(1);
      });

      it("Correct LabelWrap props", () => {
        expect(wrapper.find(LabelWrap).prop("name")).toBeDefined();
        expect(wrapper.find(LabelWrap).prop("label")).toBeDefined();
      });

      it("Label text is correctly rendered", () => {
        const foo = wrapper.find(LabelWrap).find("label");
        expect(foo.text().includes("label test")).toBeTruthy();
      });

      it("Omit Label Component is label prop is ommited", () => {
        const wrapperWithOutLabel = mount(
          createFormikComponentForTests(FormField, {
            props: {
              placeholder: "pick a day...",
              name: "test",
              helperText: "Helper Test",
              options: options.options
            }
          })
        );
        expect(wrapperWithOutLabel.find(".form-element-label").length).toEqual(
          0
        );
      });
    }
    /*
               Check ErrorContainer Component
                */
    if (includeTests.includes("ErrorContainer")) {
      it("ErrorContainer Exists", () => {
        expect(wrapper.find(ErrorContainer).length).toEqual(1);
      });

      it("Correct ErrorContainer props", () => {
        expect(wrapper.find(ErrorContainer).prop("name")).toBeDefined();
      });
    }
    /*
              Check HelperText Component
               */
    if (includeTests.includes("HelperText")) {
      it("HelperText Exists (Need to be inside LabelWrapper)", () => {
        const labelWrapper = wrapper.find(LabelWrap);
        //console.log("DB", labelWrapper.debug());
        expect(labelWrapper.find(HelperText).length).toEqual(1);
      });

      it("Correct HelperText props", () => {
        expect(wrapper.find(HelperText).prop("text")).toBeDefined();
      });
    }
    /*
             Check ClassName Props
              */
    if (includeTests.includes("className")) {
      it("className Prop should appear in root element wrapper", () => {
        const classNameWrapper = mount(
          createFormikComponentForTests(FormField, {
            props: { name: "test", className: "my-test-class" }
          })
        );
        const EW = classNameWrapper.find(ElementWrap);
        expect(EW.prop("className")).toEqual("my-test-class");
      });
    }
    /*
                 Anything which is passed to initalValues, is then passed
                 as values when submitted (more or less an example of how to incorporate
                 form submissions into your tests
              */
    if (includeTests.includes("initalValues")) {
      it("Check Initial Values and submit values match", async () => {
        const wrapperWithInitialValues = mount(
          createFormikComponentForTests(FormField, {
            props: {
              label: "label test",
              placeholder: "pick a day...",
              name: "test",
              helperText: "Helper Test",
              options: options.options
            },
            initialValue: options.value
          })
        );

        const test = wrapperWithInitialValues.find("form");

        await runNextTick(() => {
          test.simulate("submit");
        });

        await expect(wrapperWithInitialValues.state("formVals").test).toEqual(
          options.value
        );
      });
    }
  });
};

export default testFormPattern;
