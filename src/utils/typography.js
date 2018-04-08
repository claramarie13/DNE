import Typography from 'typography'

const typography = new Typography({
  includeNormalize: true,
  omitGoogleFont: false,
  googleFonts: [
    {
      name: 'Ubuntu',
      styles: ['400'],
    },
    {
      name: 'Roboto',
      styles: ['400'],
    },
    {
      name: 'Open Sans Condensed',
      styles: ['400'],
    },
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Ubuntu', 'Helvetica Neue', 'Arial', 'sans-serif'],
  headerWeight: 'normal',
  bodyFontFamily: ['Roboto', 'Arial', 'Helvetica Neue', 'Georgia', 'serif'],
})

export default typography
