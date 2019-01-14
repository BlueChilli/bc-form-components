import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";

import {
    ElementWrap,
    LabelWrap,
    HelperText,
    ErrorContainer,
    InputWrap
} from "../../Scaffolding/Scaffolding";

import "./date-input-field.scss";
import "react-day-picker/lib/style.css";

function DateInputField({ label, name, helperText = "", className = "", options = [], ...rest }) {
    const { setFieldTouched, setFieldValue } = rest;
    const value = rest.values[name];

    return (
        <ElementWrap className={className}>
            <LabelWrap name={name}>
                <label htmlFor={name}>{label || name}</label>
                <HelperText text={helperText} />
            </LabelWrap>
            <InputWrap name={name}>
                <DayPickerInput
                    formatDate={formatDate}
                    parseDate={parseDate}
                    onDayChange={value => setFieldValue(name, value)}
                    onDayPickerHide={() => setFieldTouched(name, true)}
                    value={value}
                    name={name}
                    placeholder={`${formatDate(new Date())}`}
                />
            </InputWrap>
            <ErrorContainer name={name} />
        </ElementWrap>
    );
}

export default DateInputField;
