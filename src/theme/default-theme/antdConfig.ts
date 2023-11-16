import type { ThemeConfig } from 'antd'

import { EColors, EByhirasColors, colors } from './colors'
import { boxShadow } from './boxShadow'
import { spaceBaseNumber } from './space'

// These can possibly be removed once other packages no longer include legacy versions of antd
export const C_UI_ICON_PREFIX_CLS = 'c-ui-anticon'
export const C_UI_PREFIX_CLS = 'c-ui-ant'

// ToDo: button box shadow?
export const antd = Object.freeze<ThemeConfig>({
  token: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 12,
    colorPrimary: EByhirasColors.Blue,
    colorPrimaryActive: EByhirasColors.Blue,
    colorPrimaryHover: EByhirasColors.Blue,
    blue: EByhirasColors.Blue,
    green: EColors.GreenBase,
    red: EColors.RedBase,
    orange: EColors.OrangeBase,
    colorHighlight: EColors.RedBase,
    colorLink: EColors.BlueBase,
    colorText: EColors.BlackBase,
    borderRadius: 0,
    boxShadow: boxShadow.normal,
    marginLG: spaceBaseNumber / 2,
  },
  components: {
    Layout: {
      colorBgBody: colors.bg.page,
    },
    Modal: {
      zIndexPopupBase: 1050,
    },
  },
})
