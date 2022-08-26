import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { Style } from '@mui/icons-material'

// Create a theme instance.
export let theme = createTheme({
  typography: {
    fontFamily: 'Heebo,sans-serif',
  },
  palette: {
    primary: {
      main: '#ff6464',
    },
    secondary: {
      main: '#00abcc',
      light: '#edf7fa',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width:600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width:900px)': {
            maxWidth: '860px',
          },
        },
      },

      variants: [],
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover,&.active': {
            color: '#ff6464',
          },
        },
      },
      variants: [],
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {},
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: '#fff',
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        { props: { color: 'secondary' }, style: { backgroundColor: '#142850', color: '#fff' } },
      ],
    },
  },
})

theme = responsiveFontSizes(theme)
