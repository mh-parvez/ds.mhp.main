import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import '@ds.mhp/scss/lib/Select.css';
import Text from '../../atoms/Text/Text.js';

/* Alart! we will move this foundation/utilis package, but right now its, here */
const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40,
    UP_ARROW: 38,
    ESE: 27,
};
const getNextOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return options.length - 1;
    }
    return currentIndex - 1;
};
/* ----  SELECT COMPONENT ---- */
const Select = ({ label = 'Please select an option', options = [], onOptionSelected, renderOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [highlitedIndex, setHighlitedIndex] = useState(null);
    // optionRef' for dynamic reference. cause we don't know hoe many list items will come.
    const [optionRefs, setOptionRefs] = useState([]);
    const labelRef = useRef(null);
    useEffect(() => {
        /* React.createRef - create instant refercence */
        setOptionRefs(options.map(_ => React.createRef()));
    }, [options.length]);
    useLayoutEffect(() => {
        if (highlitedIndex !== null && isOpen) {
            const ref = optionRefs[highlitedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlitedIndex]);
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
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        /* todo: use event.key later */
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
            setIsOpen(true);
        }
        /* set focus to the first item */
        highlitedItem(0);
    };
    const onOptionKeyDown = (event) => {
        /* handle escape key press */
        if (event.keyCode === KEY_CODES.ESE) {
            setIsOpen(false);
            return;
        }
        /* handle down arrow key press */
        if (event.keyCode === KEY_CODES.DOWN_ARROW) {
            highlitedItem(getNextOptionIndex(highlitedIndex, options));
        }
        /* handle up arrow key press */
        if (event.keyCode === KEY_CODES.UP_ARROW) {
            highlitedItem(getPreviousOptionIndex(highlitedIndex, options));
        }
        /* handle enter key press */
        if (event.keyCode === KEY_CODES.ENTER) {
            handleOptionClick(options[highlitedIndex], highlitedIndex);
        }
    };
    const highlitedItem = (optionIndex) => {
        setHighlitedIndex(optionIndex);
    };
    let selectedOption = null;
    if (selectedIndex != null) {
        selectedOption = options[selectedIndex];
    }
    // console.log(optionRefs);
    // console.log(highlitedIndex);
    return (React.createElement("div", { className: 'mhp-select' },
        React.createElement("button", { ref: labelRef, className: 'mhp-select__label', onClick: handleClick, onKeyDown: onButtonKeyDown, "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": 'mhp-select-list' },
            React.createElement(Text, null,
                " ",
                selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `mhp-select__caret ${isOpen ? 'mhp-select__caret--open' : 'mhp-select__caret--close'}`, width: '1rem', height: '1rem' },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" }))),
        isOpen && (React.createElement("ul", { style: { top: overlayTop }, className: 'mhp-select__overlay', role: 'menu', id: 'mhp-select-list' }, options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isHighlighted = highlitedIndex === index;
            const ref = optionRefs[index];
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => ({
                    /* here we will define default props */
                    key: option.value,
                    className: `mhp-select__option 
                    ${isSelected ? 'mhp-select__option--selected' : ''} 
                    ${isHighlighted ? 'mhp-select__option--highlighted' : ''}`,
                    ref,
                    role: 'menuitemradio',
                    tabIndex: isHighlighted ? -1 : 0,
                    onClick: () => handleOptionClick(option, index),
                    onMouseEnter: () => highlitedItem(index),
                    onMouseLeave: () => highlitedItem(null),
                    onKeyDown: onOptionKeyDown,
                    /* here we will spreed override props (user given props) */
                    ...overrideProps
                })
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React.createElement("li", { ...renderOptionProps.getOptionRecommendedProps() },
                React.createElement(Text, null, option.label),
                isSelected && (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", width: '1rem', height: '1rem' },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" })))));
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
