import styled, { css } from 'styled-components'

export const Breadcrumb = styled.div(
  ({ theme: { space } }) => css`
    margin-bottom: ${space.spaceSm};
  `
)

export const BreadcrumbInner = styled.span<{ $isClickable?: boolean }>(
  ({ theme: { fontSizes }, $isClickable }) => css`
    cursor: ${$isClickable ? 'pointer' : 'default'};
    font-size: ${fontSizes.tiny};

    &:hover {
      text-decoration: ${$isClickable ? 'underline' : 'none'};
    }
  `
)
