import { TDefaultTheme } from './DefaultTheme'

export const spaceBaseNumber = 6

const spaceBase = `${spaceBaseNumber}px` // 6px
const spaceMd = `${spaceBaseNumber * 1.5}px` // 9px
const spaceLg = `${spaceBaseNumber * 2}px` // 12px
const spaceXLg = `${spaceBaseNumber * 4}px` // 24px

const spaceSm = `${spaceBaseNumber / 2}px` // 3px

export const space = Object.freeze<TDefaultTheme['space']>({
  spaceBase,
  spaceMd,
  spaceLg,
  spaceXLg,
  spaceSm,
  iconMargin: spaceSm,

  layoutContainer: spaceBase,
  layoutContainerLg: spaceLg,
  pageHeading: spaceLg,
  bigPageHeading: spaceLg,

  menuBar: {
    spaceBetweenChildren: '15px',
    spaceToBorder: '5px',
  },
})
