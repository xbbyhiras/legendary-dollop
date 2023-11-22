import * as React from 'react'
// @ts-ignore
import type { StyledComponentProps } from 'styled-components'
import { DefaultTheme } from 'styled-components'

export type SCProps<Component extends string | React.ComponentType<any>, Props extends {}> = StyledComponentProps<
  Component,
  DefaultTheme,
  Props,
  any
>
