import { border } from './border'
import { boxShadow } from './boxShadow'
import { colors } from './colors'
import { fonts } from './fonts'
import { fontSizes } from './fontSizes'
import { space } from './space'
import { antd } from './antdConfig'
import { TDefaultTheme } from './DefaultTheme'
import { lineHeights } from './lineHeights'

export const defaultTheme = Object.freeze<TDefaultTheme>({
  border,
  boxShadow,
  colors,
  fonts,
  fontSizes,
  lineHeights,
  space,
  antd,
})

export type { TDefaultTheme } from './DefaultTheme'
