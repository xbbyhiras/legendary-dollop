import { colors } from './colors'
import { TDefaultTheme } from './DefaultTheme'

export const border = Object.freeze<TDefaultTheme['border']>({
  lighter: `1px solid ${colors.border.lightGrey}`,
  light: `1px solid ${colors.border.grey}`,
})
