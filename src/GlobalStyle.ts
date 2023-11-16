import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle(
  ({
    theme: {
      antd: { prefixClass },
    },
  }) => css`
    .${prefixClass}-app {
      height: 100%;
    }

    [data-draggable-modal='true'] .${prefixClass}-modal-wrap {
      pointer-events: none;
    }
  `
)
