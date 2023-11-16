import { colors } from './colors'
import { TDefaultTheme } from './DefaultTheme'

export const boxShadow = Object.freeze<TDefaultTheme['boxShadow']>({
  normal: `0 0 8px 2px ${colors.boxShadow.grey}`,
})
