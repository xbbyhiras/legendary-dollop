import * as React from "react";
import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { createGlobalStyle, css } from "styled-components";
import { TDefaultTheme } from "../src/theme";
import { CommonUiPureThemeProvider } from "../src/CommonUIProvider";

const GlobalStyle = createGlobalStyle(
  ({ theme }: { theme: TDefaultTheme }) => css`
    body {
      color: ${theme.colors.legacy.greyDarker};
    }
  `
);

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <CommonUiPureThemeProvider namespace="storybook">
        <GlobalStyle />
        <Story />
      </CommonUiPureThemeProvider>
    ),
  ],
};

export default preview;
