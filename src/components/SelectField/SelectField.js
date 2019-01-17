import React from "react";
import Select from "react-select";
import { connect } from "formik";

import {
    ElementWrap,
    LabelWrap,
    HelperText,
    ErrorContainer,
    InputWrap
} from "../../Scaffolding/Scaffolding";

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

function SelectField({
    label,
    name,
    helperText = "",
    className = "",
    placeholder = "Select...",
    options = [],
    formik
}) {
    const { setFieldTouched, setFieldValue } = formik;
    const value = formik.values[name];

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

export default connect(SelectField);