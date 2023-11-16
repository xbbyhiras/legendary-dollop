/* eslint-disable @typescript-eslint/no-empty-interface */
import type { ThemeConfig } from 'antd'
import { TLegacyTheme } from './legacy'

export type TDefaultTheme = {
  border: {
    // TODO: remove this if SAM does not like light as border on statics (3rd August 2023)
    lighter: string
    light: string
  }

  boxShadow: {
    normal: string
  }

  colors: {
    agGrid: {
      selected: string
    }
    bg: {
      page: string
      darkGrey: string
      grey: string
      lightGrey: string
      white: string
      tableRowOdd: string
    }
    border: {
      grey: string
      lightGrey: string
    }
    boxShadow: {
      grey: string
    }
    byhiras: {
      blue: {
        light: string
        regular: string
        dark: string
        link: string
      }
      header: string
      red: string
    }
    text: {
      base: string
      grey: string
      alt: string
      baseWithOpacity: string
    }
    brand: {
      red: string
    }
    chart: {
      primaryColor: string
      secondaryColor: string
      tertiaryColor: string
    }
    legacy: TLegacyTheme['colors']
  }

  fonts: {
    base: string
  }

  fontSizes: {
    tiny: string
    text: string
    base: string
    medium: string
    large: string
    huge: string
    giant: string
    pageHeading: string
    pageHeadingLineHeight: string
    bigPageHeading: string
    bigPageHeadingLineHeight: string
    legacy: Record<string, any>
  }

  lineHeights: {
    base: number
    large: number
  }

  space: {
    layoutContainer: string
    layoutContainerLg: string
    pageHeading: string
    bigPageHeading: string
    spaceSm: string
    spaceBase: string
    spaceMd: string
    spaceLg: string
    spaceXLg: string
    iconMargin: string

    menuBar: {
      spaceBetweenChildren: string
      spaceToBorder: string
    }
  }

  antd: ThemeConfig & {
    prefixClass?: string
    iconPrefixClass?: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends TDefaultTheme {}
}
