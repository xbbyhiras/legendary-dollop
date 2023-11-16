const chartDataColorsMap = {
  blue: '#1f77b4',
  green: '#2ca02c',
  lightBlue: '#7cb5ec',
  orange: '#ff7f0e',
  red: '#d62728',
}

export default Object.freeze({
  chartDataColorsMap,
  black: '#000000',
  blues: {
    lightest: '#e6f7ff',
    lighter: '#009ddc',
    regular: '#1890ff',
    darkest: '#182435',
  },
  byhirasBlue: '#2a3f5c',
  byhirasHeader: '#001c3c',
  darkGreen: '#357743',
  greens: {
    lightest: '#f6ffed',
    darkest: '#357743',
  },
  grey: '#9e9e9e',
  greyLight: '#e7e6e6',
  greyLightest: '#F3F3F3',
  greyLightBorder: '#E7E7E7',
  greyLightestBorder: '#DEDEDE',
  greyBorder: '#979797',
  greyMedium: '#cccccc',
  greyDark: '#9e9f9e',
  greyDarker: '#888888',
  greyDarkerer: '#333333',
  greyDarkest: '#222222',
  pink: '#e91e63',
  red: '#f44336',
  reds: {
    lightest: '#fff1f0',
    darkest: '#f44336',
  },
  skyBlueLight: '#e5f2fc',
  skyBlueMedium: '#9bc0dd',
  white: '#ffffff',
  oranges: {
    lightest: '#fffbe6',
    darkest: '#ff5722',
  },
  // Color order is important
  chartDataColors: [
    chartDataColorsMap.blue,
    chartDataColorsMap.orange,
    chartDataColorsMap.green,
    chartDataColorsMap.red,
    chartDataColorsMap.lightBlue,
  ],

  // TODO: I got these colors from the designer. I think step by step, these colors will change all existing.
  //       These colors are used for the LGPS status page.
  byhiras: {
    agGrid: {
      selected: '#b7e4ff',
    },
    graph: {
      red: '#d36364',
      green: '#52c174',
      yellow: '#ffbe10',
      blue: '#4d607d',
      lightBlue: '#a3cce6',
      linesBackground: '#f3f3f3',
      axis: '#9f9f9f',
      lines: '#c9c9c9',
    },
    blue: {
      light: '#4d607d',
      regular: '#2a3f5c',
      dark: '#192a43',
      link: '#4d73a8',
    },
    grey: {
      dark: '#eeeeee',
      background: '#eeeeee',
      line: '#c9c9c9',
      text: '#333333',
    },
    gold: {
      light: '#d1a751',
      regular: '#a87e28',
      dark: '#8a5d04',
    },
    green: {
      light: '#10a838',
      regular: '#0f9433',
    },
    orange: {
      regular: '#ff6d21',
    },
    red: {
      light: '#f52b33',
      regular: '#cc2831',
    },
    white: {
      light: '#ffffff',
      regular: '#ffffff',
      dark: '#d6d6d6',
    },
  },
})
