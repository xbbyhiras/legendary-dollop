import styled, { css } from 'styled-components'

// 21cm - A4 format width
export const ArticleDiv = styled.div(
  ({ theme: { fontSizes, space, colors } }) => css`
    font-size: ${fontSizes.text};
    max-width: 21cm;
    margin: 0 auto;
    text-align: justify;

    & > *:first-child {
      margin-top: 0;
    }

    & > *:last-child {
      margin-bottom: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${colors.byhiras.blue.regular};
      font-weight: 400;
      font-style: normal;
    }

    h1 {
      font-size: ${fontSizes.giant};
      margin: ${space.spaceXLg} 0;
    }

    h2 {
      font-size: ${fontSizes.large};
      margin: ${space.spaceXLg} 0;
    }

    h3 {
      font-size: ${fontSizes.base};
      margin: ${space.spaceXLg} 0;
    }

    table,
    th,
    td {
      border: 1px solid ${colors.border.grey};
      border-collapse: collapse;
    }

    th,
    td {
      padding: ${space.spaceBase};
      text-align: left;
    }

    thead tr {
      background: ${colors.bg.white};
    }

    tbody tr:nth-child(odd) {
      background: ${colors.bg.tableRowOdd};
    }
    tbody tr:nth-child(even) {
      background: ${colors.bg.white};
    }

    a {
      color: ${colors.byhiras.blue.link};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      margin: ${space.spaceMd} 0;
    }

    li {
      margin: ${space.spaceBase} 0;
    }
  `
)

export const ScrollableDiv = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
`
