import React from 'react';
import { FontSize } from '@ds.mhp/foundation';
import '@ds.mhp/scss/lib/text.css';

const Text = ({ size = FontSize.base, children }) => {
    const className = `mhp-text mhp-text-${size}`;
    return (React.createElement("p", { className: className }, children));
};

export { Text as default };
//# sourceMappingURL=Text.js.map
