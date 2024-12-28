import React from 'react';
import { Spacing } from '@ds.mhp/foundation';
import '@ds.mhp/scss/lib/utilites.css';

const Color = ({ hexcode, height = Spacing.lg, width = Spacing.lg }) => {
    const className = `mhp-width-${width} mhp-height-${height}`;
    return (React.createElement("div", { className: className, style: { backgroundColor: hexcode } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
