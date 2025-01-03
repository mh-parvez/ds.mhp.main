import React from 'react';
import '@ds.mhp/scss/lib/Margin.css';

const Margin = ({ space = 'md', left, right, top, bottom, children }) => {
    let className = '';
    if (!left && !right && !top && !bottom) {
        className = `mhp-margin-${space}`;
    }
    if (left)
        className += `mhp-margin-left-${space} `;
    if (right)
        className += `mhp-margin-right-${space} `;
    if (top)
        className += `mhp-margin-top-${space} `;
    if (bottom)
        className += `mhp-margin-bottom-${space} `;
    return (React.createElement("div", { className: className }, children));
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
