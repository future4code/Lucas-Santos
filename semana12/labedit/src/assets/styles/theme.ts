import { createTheme } from '@material-ui/core/styles'
import { primaryBackgroundColor, primaryTextColor, textColor } from './global'

export const Theme = createTheme({
  palette: {
    primary: {
      main: primaryBackgroundColor,
      contrastText: primaryTextColor
    },
    text: {
      primary: textColor
    }
  }
})