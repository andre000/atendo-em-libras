// This follows Grommet's theme structure.
// For more info on which attributes are available

import { COLORS } from './colors'

// visit https://v2.grommet.io/button
export const BUTTONS = {
  primary: {
    background: COLORS.brand,
    color: 'white',
  },
  default: {},
  size: {
    small: {
      pad: {
        vertical: '12px',
        horizontal: '22px',
      },
    },
    medium: {
      pad: {
        vertical: '14px',
        horizontal: '30px',
      },
    },
    large: undefined,
  },
  border: {
    width: 0,
  },
}

// visit https://v2.grommet.io/anchor
export const ANCHORS = {
  hover: {
    textDecoration: 'none',
    extend: `
      color: #5996f7;
      border-bottom: 2px solid #5996f7;
    `,
  },
}
