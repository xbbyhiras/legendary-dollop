import * as React from "react";

import { merge } from "lodash";
import { Signal, useSignal } from "@preact/signals-react";
import { ThemeProvider } from "styled-components";
import { ConfigProvider, App, message } from "antd";
// import { DictionaryProvider } from './store'
import { defaultTheme, TDefaultTheme } from "./theme";
import {
  C_UI_ICON_PREFIX_CLS,
  C_UI_PREFIX_CLS,
} from "./theme/default-theme/antdConfig";
import { GlobalStyle } from "./GlobalStyle";

type TCommonUiProviderProps = {
  themeOverrides?: Record<string, unknown>;
  namespace: string;
  children: React.ReactNode;
};

// Use this to wrap components that don't need the dictionary
export const CommonUiPureThemeProvider = ({
  themeOverrides = {},
  namespace,
  children,
}: TCommonUiProviderProps): React.JSX.Element => {
  const prefixClass = `${namespace}-${C_UI_PREFIX_CLS}`;
  const iconPrefixClass = `${namespace}-${C_UI_ICON_PREFIX_CLS}`;

  React.useEffect(() => {
    message.config({ prefixCls: prefixClass });
  }, []);

  const theme: Signal<TDefaultTheme> = useSignal(
    merge(
      {},
      defaultTheme,
      themeOverrides,
      {
        antd: { prefixClass, iconPrefixClass },
      }
    )
  )

  return (
    <ThemeProvider theme={theme.value}>
      <ConfigProvider
        theme={theme.value.antd}
        prefixCls={prefixClass}
        iconPrefixCls={iconPrefixClass}
        componentSize="small"
      >
        <GlobalStyle />
        <App>{children}</App>
      </ConfigProvider>
    </ThemeProvider>
  );
}

// export const CommonUiProvider = ({ children, ...props }: TCommonUiProviderProps) => {
//   return (
//     <CommonUiPureThemeProvider {...props}>
//       <DictionaryProvider>{children}</DictionaryProvider>
//     </CommonUiPureThemeProvider>
//   )
// }