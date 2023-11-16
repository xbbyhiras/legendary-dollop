import type { TDefaultTheme } from './DefaultTheme'
import { legacy } from './legacy'

export enum EByhirasColors {
  Blue = '#2a3f5c',
  Red = '#cc2831',
}

// Can't have computed enum values so this is object
export const EColors = Object.freeze({
  BlackBase: '#333333',
  RedBase: EByhirasColors.Red,
  GreenBase: '#0f9433',
  OrangeBase: '#ff6d21',
  BlueBase: EByhirasColors.Blue,
  Black: '#000',
  White: '#ffffff',
})

export const byhirasBlueColor = EByhirasColors.Blue
export const brandRedColor = EByhirasColors.Blue
export const black = EColors.BlackBase

export const colors = Object.freeze<TDefaultTheme['colors']>({
  agGrid: {
    selected: '#b7e4ff',
  },
  bg: {
    page: EColors.White,
    darkGrey: 'hsla(0, 0%, 88%, 1)',
    grey: 'hsla(0, 0%, 96%, 1)',
    lightGrey: '#f7f7f7',
    white: EColors.White,
    tableRowOdd: '#eee',
  },
  border: {
    grey: '#c9c9c9',
    lightGrey: '#f7f7f7',
  },
  boxShadow: {
    grey: '#949494',
  },
  byhiras: {
    blue: {
      light: '#4d607d',
      regular: EByhirasColors.Blue,
      dark: '#192a43',
      link: '#4d73a8',
    },
    header: '#001c3c',
    red: EByhirasColors.Red,
  },
  brand: {
    red: EByhirasColors.Red,
  },
  text: {
    base: '#333333',
    grey: '#c9c9c9',
    alt: EColors.White,
    baseWithOpacity: 'rgba(0, 0, 0, 0.3)',
  },
  chart: {
    primaryColor: EByhirasColors.Blue,
    secondaryColor: '#7cb5ec',
    tertiaryColor: '#f8fbfe',
  },
  legacy: legacy.colors,
})
