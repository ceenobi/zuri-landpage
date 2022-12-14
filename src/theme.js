import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};


const theme = extendTheme(
  {
    fonts: {
      heading: `'Averta Standard', sans-serif`,
      body: `'Averta Standard', sans-serif`,
    },
  },
  { breakpoints }
);

export default theme;
