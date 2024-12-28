import React from 'react';
import { Spacing } from '@ds.mhp/foundation';
import '@ds.mhp/scss/lib/utilites.css';

interface ColorProps {
  hexcode: string;
  height?: keyof typeof Spacing;
  width?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({ hexcode, height = Spacing.lg, width = Spacing.lg }) => {

  const className = `mhp-width-${width} mhp-height-${height}`

  return (
    <div className={className} style={{ backgroundColor: hexcode }}></div>
  )
}

export default Color;
