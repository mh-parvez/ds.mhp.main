import React from 'react';
import { FontSize } from '@ds.mhp/foundation';
import '@ds.mhp/scss/lib/text.css';
interface TextType {
    size?: keyof typeof FontSize;
    children: React.ReactNode;
}
declare const Text: React.FC<TextType>;
export default Text;
