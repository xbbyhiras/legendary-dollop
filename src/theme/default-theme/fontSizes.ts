import { TDefaultTheme } from './DefaultTheme'

const legacyDefaultFontSize = {
  md: '0.75rem', // 12px
  lg: '0.75rem', // 12px
}

export const fontSizes = Object.freeze<TDefaultTheme['fontSizes']>({
  tiny: '10px',
  text: '12px',
  medium: '14px',
  base: '16px',
  large: '18px',
  huge: '20px',
  giant: '24px',

  pageHeading: '16px',
  pageHeadingLineHeight: '18px',
  bigPageHeading: '25px',
  bigPageHeadingLineHeight: '20px',
  legacy: {
    h1: {
      md: '1.5625rem', // 25px
      lg: '1.75rem', // 28px
    },
    h2: {
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
    },
    h3: {
      md: '0.875rem', // 14px
      lg: '0.875rem', // 14px
    },
    para: legacyDefaultFontSize,
    small: {
      md: '0.625rem', // 10px
      lg: '0.625rem', // 10px
    },
    smaller: {
      md: '0.6875rem', // 11px
      lg: '0.6875rem', // 11px
    },
    normal: '0.75rem', // 12px
    normalNewX: legacyDefaultFontSize,
    big: {
      md: '0.9375rem', // 15px
      lg: '0.9375rem', // 15px
    },
    large: {
      md: '1rem', // 16px
      lg: '1rem', // 16px
    },
    chartHeader: legacyDefaultFontSize,
    chartLabel: legacyDefaultFontSize,
    chartTitle: legacyDefaultFontSize,
    chartLegend: legacyDefaultFontSize,
    templateCounter: legacyDefaultFontSize,
    tick: '0.656rem', // 10.5px
    filter: '0.8rem', // 12.8px
    pageTitle: {
      md: '1.5rem', // 24px
      lg: '1.5rem', // 24px
    },
  },
})
