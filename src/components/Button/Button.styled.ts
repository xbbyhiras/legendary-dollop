import { Button as AntDButton } from 'antd'

import styled, { css } from 'styled-components'

export const Button = styled(AntDButton)<{ $hideContents?: boolean }>(
  ({
    $hideContents,
    theme: {
      antd: { prefixClass },
    },
  }) => css`
    align-items: center;
    display: inline-flex;
    justify-content: center;

    ${$hideContents &&
    css`
      .${prefixClass}-btn-icon {
        margin-inline-end: 0 !important;
      }
    `}
  `
)

export const Content = styled.span<{ $hidden?: boolean }>(
  ({ $hidden }) => css`
    ${$hidden &&
    css`
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    `}
  `
)
