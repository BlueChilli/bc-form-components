import React, { useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { connect, ErrorMessage, getIn, Field } from 'formik';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dayPickerMomentHelpers from 'react-day-picker/moment';
import propTypes from 'prop-types';
import 'react-day-picker/lib/style.css';
import Select from 'react-select';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var fadeInOut = {
  enter: {
    opacity: 1,
    transition: {
      duration: 400
    },
    applyAtStart: {
      display: "inline"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 200
    },
    applyAtEnd: {
      display: "none"
    }
  }
};
var BlurIn = {
  enter: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 500
    },
    applyAtStart: {
      display: "inline"
    }
  },
  exit: {
    filter: "blur(4px)",
    opacity: 0.3,
    transition: {
      duration: 200
    },
    applyAtEnd: {
      display: "none"
    }
  }
};

var WrapAnimCreator = function WrapAnimCreator(animObject) {
  return posed.span(animObject);
};

var animStash = {
  default: fadeInOut,
  BlurIn: BlurIn
};

var getAnimStashFunction = function getAnimStashFunction(name) {
  return animStash[name] || animStash.default;
};

var Show = function Show(_ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$anim = _ref.anim,
      anim = _ref$anim === void 0 ? "default" : _ref$anim,
      _ref$animateOnMount = _ref.animateOnMount,
      animateOnMount = _ref$animateOnMount === void 0 ? true : _ref$animateOnMount,
      _ref$flipMove = _ref.flipMove,
      flipMove = _ref$flipMove === void 0 ? false : _ref$flipMove,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["show", "anim", "animateOnMount", "flipMove", "children"]);

  var WrapAnim = WrapAnimCreator(getAnimStashFunction(anim));
  return React.createElement(PoseGroup, _extends({
    flipMove: flipMove,
    animateOnMount: animateOnMount
  }, rest), show && React.createElement(WrapAnim, {
    key: "one",
    animateOnMount: true
  }, children));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/** **/\n.btn {\n  font-size: 18px;\n  line-height: 1.56;\n  border-radius: 2px;\n  padding: 8px 32px;\n  opacity: 1;\n  -webkit-transition: 500ms opacity;\n  transition: 500ms opacity;\n  cursor: pointer; }\n  .btn:disabled {\n    cursor: not-allowed;\n    -webkit-transition: 500ms opacity;\n    transition: 500ms opacity;\n    opacity: 0.4; }\n\n.btn-primary {\n  background: #e0b581;\n  border: none;\n  color: #1b3b49; }\n  .btn-primary:hover {\n    background: #eacdaa;\n    -webkit-transition: 300ms background;\n    transition: 300ms background; }\n\n.form-element {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-bottom: 20px; }\n  .form-element .form-element-label {\n    font-size: 16px;\n    margin-bottom: 4px; }\n  .form-element .form-element-helpertext {\n    margin-top: 2px;\n    font-size: 10px;\n    color: #aaaaaa; }\n  .form-element .form-element-input {\n    margin-bottom: 4px; }\n    .form-element .form-element-input input,\n    .form-element .form-element-input textarea {\n      width: 100%;\n      height: 52px;\n      background-color: white;\n      border: 1px solid #eee;\n      font-size: 16px;\n      color: #aaaaaa;\n      padding-left: 8px;\n      padding-right: 8px;\n      caret-color: #aaaaaa; }\n    .form-element .form-element-input textarea {\n      min-width: 100%;\n      max-width: 100%;\n      height: 128px;\n      min-height: 128px; }\n    .form-element .form-element-input div.checkbox {\n      padding: 8px 0px; }\n      .form-element .form-element-input div.checkbox input.checkbox,\n      .form-element .form-element-input div.checkbox label {\n        display: inline; }\n      .form-element .form-element-input div.checkbox input.checkbox {\n        margin-right: 8px;\n        width: auto;\n        height: 16.5px; }\n  .form-element .error input {\n    border: 1px solid #c01405; }\n  .form-element .form-element-error {\n    font-size: 12px;\n    margin-bottom: 4px;\n    color: #ff282a; }\n";
styleInject(css);

var DivWithCSSClass = function DivWithCSSClass(_ref) {
  var cssClass = _ref.cssClass,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      children = _ref.children;
  return React.createElement("div", {
    className: cssClass + " " + className
  }, children);
};

var ElementWrap = function ElementWrap(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? "" : _ref2$className,
      children = _ref2.children;
  return React.createElement(DivWithCSSClass, {
    cssClass: "form-element",
    className: className
  }, children);
};
var LabelWrap = connect(function (_ref3) {
  var _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? "" : _ref3$className,
      children = _ref3.children,
      _ref3$label = _ref3.label,
      label = _ref3$label === void 0 ? undefined : _ref3$label;
  if (label === undefined) return null;
  return React.createElement(DivWithCSSClass, {
    cssClass: "form-element-label",
    className: className
  }, children);
});
var HelperText = function HelperText(_ref4) {
  var text = _ref4.text,
      _ref4$className = _ref4.className,
      className = _ref4$className === void 0 ? "" : _ref4$className;
  return React.createElement(DivWithCSSClass, {
    cssClass: "form-element-helpertext",
    className: className
  }, text);
};
var InputWrap = connect(function (_ref5) {
  var _ref5$className = _ref5.className,
      className = _ref5$className === void 0 ? "" : _ref5$className,
      _ref5$name = _ref5.name,
      name = _ref5$name === void 0 ? "" : _ref5$name,
      children = _ref5.children,
      formik = _ref5.formik;
  var error = getIn(formik.errors, name);
  var touched = getIn(formik.touched, name);
  var errorClass = error && touched ? "error" : "";
  return React.createElement(DivWithCSSClass, {
    cssClass: "form-element-input ".concat(errorClass),
    className: className
  }, children);
});
var ErrorContainer = function ErrorContainer(_ref6) {
  var className = _ref6.className,
      name = _ref6.name;
  return React.createElement(ErrorMessage, {
    name: name,
    render: function render(msg) {
      return React.createElement(Show, {
        animateOnMount: true
      }, React.createElement("span", {
        className: "form-element-error"
      }, msg.length > 0 ? msg : msg.value));
    }
  });
};

function DateInputField(_ref) {
  var label = _ref.label,
      name = _ref.name,
      _ref$helperText = _ref.helperText,
      helperText = _ref$helperText === void 0 ? "" : _ref$helperText,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
      formik = _ref.formik;
  var setFieldTouched = formik.setFieldTouched,
      setFieldValue = formik.setFieldValue;
  var value = getIn(formik.values, name);
  return React.createElement(ElementWrap, {
    className: className
  }, label && React.createElement(LabelWrap, {
    name: name,
    label: label
  }, React.createElement("label", {
    htmlFor: name
  }, label || name), React.createElement(HelperText, {
    text: helperText
  })), React.createElement(InputWrap, {
    name: name
  }, React.createElement(DayPickerInput, {
    formatDate: dayPickerMomentHelpers.formatDate,
    parseDate: dayPickerMomentHelpers.parseDate,
    onDayChange: function onDayChange(value) {
      return setFieldValue(name, value);
    },
    onDayPickerHide: function onDayPickerHide() {
      return setFieldTouched(name, true);
    },
    value: value,
    name: name,
    placeholder: placeholder
  })), React.createElement(ErrorContainer, {
    name: name
  }));
}

DateInputField.propTypes = {
  /** Will populate the label field */
  label: propTypes.string,
  className: propTypes.string,
  name: propTypes.string.isRequired,
  helperText: propTypes.string,
  placeholder: propTypes.string
};
var DateInputField$1 = connect(DateInputField);

function TextareaField(_ref) {
  var label = _ref.label,
      name = _ref.name,
      _ref$helperText = _ref.helperText,
      helperText = _ref$helperText === void 0 ? "" : _ref$helperText,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
      formik = _ref.formik;
  var setFieldValue = formik.setFieldValue,
      setFieldTouched = formik.setFieldTouched;
  var value = formik.values[name];
  return React.createElement(ElementWrap, {
    className: className
  }, React.createElement(LabelWrap, {
    name: name,
    label: label
  }, React.createElement("label", {
    htmlFor: name
  }, label || name), React.createElement(HelperText, {
    text: helperText
  })), React.createElement(InputWrap, {
    name: name
  }, React.createElement("textarea", {
    name: name,
    value: value,
    onBlur: function onBlur() {
      return setFieldTouched(name, true);
    },
    onChange: function onChange(e) {
      return setFieldValue(name, e.target.value);
    },
    placeholder: placeholder
  })), React.createElement(ErrorContainer, {
    name: name
  }));
}

var TextareaField$1 = connect(TextareaField);

var TextField = function TextField(props) {
  var label = props.label,
      name = props.name,
      _props$helperText = props.helperText,
      helperText = _props$helperText === void 0 ? "" : _props$helperText,
      _props$className = props.className,
      className = _props$className === void 0 ? "" : _props$className,
      rest = _objectWithoutProperties(props, ["label", "name", "helperText", "className"]);

  return React.createElement(ElementWrap, {
    className: className,
    name: name
  }, React.createElement(LabelWrap, {
    name: name,
    label: label
  }, React.createElement("label", {
    htmlFor: name
  }, label), React.createElement(HelperText, {
    text: helperText
  })), React.createElement(InputWrap, {
    name: name
  }, React.createElement(Field, _extends({
    id: name,
    name: name,
    autoComplete: "nope"
  }, rest))), React.createElement(ErrorContainer, {
    name: name
  }));
};

var TextField$1 = connect(TextField);

/**
```js
import React from "react";
import Select from "react-select";
import {
    ElementWrap,
    LabelWrap,
    HelperText,
    ErrorContainer,
    InputWrap
} from "../../Scaffolding/Scaffolding";

export default function SelectField({
    label,
    name,
    helperText = "",
    className = "",
    placeholder = "Select...",
    options = [],
    ...rest
}) {
    const { setFieldTouched, setFieldValue } = rest;
    const value = rest.values[name];

    return (
        <ElementWrap className={className}>
            <LabelWrap name={name}>
                <label htmlFor={name}>{label || name}</label>
                <HelperText text={helperText} />
            </LabelWrap>
            <InputWrap name={name}>
                <Select
                    autoBlur
                    className={`${className} select-container`}
                    classNamePrefix={`${className} select`}
                    labelKey="name"
                    placeholder={placeholder}
                    name={name}
                    onBlur={() => setFieldTouched(name, true)}
                    onChange={value => setFieldValue(name, value)}
                    options={options}
                    value={value}
                />
            </InputWrap>
            <ErrorContainer name={name} />
        </ElementWrap>
    );
}
```
 */

function SelectField(_ref) {
  var label = _ref.label,
      name = _ref.name,
      _ref$helperText = _ref.helperText,
      helperText = _ref$helperText === void 0 ? "" : _ref$helperText,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Select..." : _ref$placeholder,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      formik = _ref.formik;
  var setFieldTouched = formik.setFieldTouched,
      setFieldValue = formik.setFieldValue;
  var value = formik.values[name];
  return React.createElement(ElementWrap, {
    className: className
  }, React.createElement(LabelWrap, {
    name: name,
    label: label
  }, React.createElement("label", {
    htmlFor: name
  }, label || name), React.createElement(HelperText, {
    text: helperText
  })), React.createElement(InputWrap, {
    name: name
  }, React.createElement(Select, {
    autoBlur: true,
    className: "".concat(className, " select-container"),
    classNamePrefix: "".concat(className, " select"),
    labelKey: "name",
    placeholder: placeholder,
    name: name,
    onBlur: function onBlur() {
      return setFieldTouched(name, true);
    },
    onChange: function onChange(value) {
      return setFieldValue(name, value);
    },
    options: options,
    value: value
  })), React.createElement(ErrorContainer, {
    name: name
  }));
}

var SelectField$1 = connect(SelectField);

function CheckboxField(props) {
  var label = props.label,
      name = props.name,
      _props$helperText = props.helperText,
      helperText = _props$helperText === void 0 ? "" : _props$helperText,
      _props$className = props.className,
      className = _props$className === void 0 ? "" : _props$className;
  return React.createElement(ElementWrap, {
    className: className,
    name: name
  }, React.createElement(InputWrap, {
    name: name
  }, React.createElement(Field, {
    className: "checkbox ".concat(className),
    name: name,
    id: name,
    type: "checkbox"
  })), React.createElement(LabelWrap, {
    name: name,
    label: label
  }, React.createElement("label", {
    className: "form-element-label ".concat(className),
    htmlFor: name
  }, label || name), React.createElement(HelperText, {
    text: helperText
  })), React.createElement(ErrorContainer, {
    name: name
  }));
}

function FormError(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? "" : _props$className;
  var _props$formik = props.formik,
      status = _props$formik.status,
      dirty = _props$formik.dirty,
      values = _props$formik.values,
      setStatus = _props$formik.setStatus;
  useEffect(function () {
    setStatus(false);
  }, [values]);
  return React.createElement(ElementWrap, {
    className: className,
    name: "submit-button"
  }, React.createElement(Show, {
    show: dirty && status
  }, React.createElement("div", {
    className: "form-element-error " + className
  }, status)));
}

var FormError$1 = connect(FormError);

export { DateInputField$1 as DateInputField, TextareaField$1 as TextareaField, TextField$1 as TextField, SelectField$1 as SelectField, CheckboxField, FormError$1 as FormError };
//# sourceMappingURL=index.es.js.map
