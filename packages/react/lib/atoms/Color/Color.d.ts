import React from 'react';
import { Spacing } from '@ds.mhp/foundation';
import '@ds.mhp/scss/lib/utilites.css';
interface ColorProps {
    hexcode: string;
    height?: keyof typeof Spacing;
    width?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
