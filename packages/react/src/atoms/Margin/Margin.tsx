import React from 'react';
import { Spacing } from '@ds.mhp/foundation';
import '@ds.mhp/scss/lib/Margin.css';

interface MarginProps {
    space?: keyof typeof Spacing;
    children: React.ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}

const Margin: React.FC<MarginProps> = ({ space = 'md', left, right, top, bottom, children }) => {

    let className = '';

    if(!left && !right && !top && !bottom) {
        className = `mhp-margin-${space}`;
    }

    if (left) className += `mhp-margin-left-${space} `;
    if (right) className += `mhp-margin-right-${space} `;
    if (top) className += `mhp-margin-top-${space} `;
    if (bottom) className += `mhp-margin-bottom-${space} `;

    return (
        <div className={className}>{children}</div>
    )
}

export default Margin;
