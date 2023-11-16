import * as React from "react";
import type { Preview } from "@storybook/react";

import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { TDefaultTheme, defaultTheme } from "../src/theme";
import { CommonUiPureThemeProvider } from "../src/CommonUIProvider";

const GlobalStyle = createGlobalStyle(
  ({ theme }: { theme: TDefaultTheme }) => css`
    body {
      color: ${theme.colors.legacy.greyDarker};
    }
  `
);

const preview: Preview = {
  parameters: {
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
