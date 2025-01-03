import React, { useState, useRef, useLayoutEffect } from 'react';
import '@ds.mhp/scss/lib/Select.css';
import Text from '../../atoms/Text/Text.js';

const Select = ({ label = 'Please select an option', options = [], onOptionSelected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const labelRef = useRef(null);
    useLayoutEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10); // extra 10px;
    }, [labelRef.current?.offsetHeight]);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option, index) => {
        if (onOptionSelected) {
            onOptionSelected(option, index);
        }
        setSelectedIndex(index);
        setIsOpen(false);
    };
    let selectedOption = null;
    if (selectedIndex != null) {
        selectedOption = options[selectedIndex];
    }
    return (React.createElement("div", { className: 'mhp-select' },
        React.createElement("button", { ref: labelRef, className: 'mhp-select__label', onClick: handleClick },
            React.createElement(Text, null,
                " ",
                selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `mhp-select__caret ${isOpen ? 'mhp-select__caret--open' : 'mhp-select__caret--close'}`, width: '1rem', height: '1rem' },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" }))),
        isOpen && (React.createElement("ul", { style: { top: overlayTop }, className: 'mhp-select__overlay' }, options.map((option, index) => {
            const isSelected = selectedIndex === index;
            return (React.createElement("li", { className: `mhp-select__option ${isSelected ? 'mhp-select__option--selected' : ''}`, key: option.value, onClick: () => handleOptionClick(option, index) },
                React.createElement(Text, null, option.label),
                isSelected && (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", width: '1rem', height: '1rem' },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" })))));
        })))));
};
/*
Select Component Revel this API
```````````````````````````````
<Select
    label= 'Please Select A Color'
    options= {[
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ]}
    onOptionSelected = { console.log() }
/>
*/

export { Select as default };
//# sourceMappingURL=Select.js.map
