import React, { useState } from "react";
import {
    ElementWrap,
    LabelWrap,
    HelperText,
    ErrorContainer,
    InputWrap
} from "../../utils/Scaffolding";

export default function TextArea({
    label,
    name,
    helperText = "",
    className = "",
    placeholder = "",
    value = "Default value",
    ...rest
}) {
    const [textAreaValue, setTextAreaValue] = useState(value);

    return (
        <ElementWrap className={className}>
            <LabelWrap name={name}>
                <label htmlFor={name}>{label || name}</label>
                <HelperText text={helperText} />
            </LabelWrap>
            <InputWrap name={name}>
                <textarea
                    onChange={e => setTextAreaValue(e.target.value)}
                    name={name}
                    value={textAreaValue}
                    placeholder={placeholder}
                    {...rest}
                />
            </InputWrap>
            <ErrorContainer name={name} />
        </ElementWrap>
    );
}
