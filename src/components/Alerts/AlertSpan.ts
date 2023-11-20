import styled, { css } from 'styled-components'

export const AlertSpan = styled.span<{ $type?: 'warning' | 'error' }>(
  ({ theme: { colors }, $type }) => css`
    -webkit-user-select: none;
    user-select: none;
    ${$type === 'error' && `color: ${colors.byhiras.red}`};
  `
)
