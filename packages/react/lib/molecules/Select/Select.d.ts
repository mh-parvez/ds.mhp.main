import React from 'react';
import "@ds.mhp/scss/lib/Select.css";
interface SelectOption {
    label: string;
    value: string;
}
interface SelectProps {
    label?: string;
    options?: Array<SelectOption>;
    onOptionSelected?: (options: SelectOption, optionIndex: number) => void;
}
declare const Select: React.FC<SelectProps>;
export default Select;
