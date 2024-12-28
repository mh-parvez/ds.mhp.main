import React from 'react'
import { FontSize } from '@ds.mhp/foundation';
import '@ds.mhp/scss/lib/text.css';

interface TextType {
    size?: keyof typeof FontSize;
    children: React.ReactNode;
}

const Text: React.FC<TextType> = ({ size = FontSize.base, children }) => {
    const className = `mhp-text mhp-text-${size}`;
    return (
        <p className={className}>{children}</p>
    )
}

export default Text;

