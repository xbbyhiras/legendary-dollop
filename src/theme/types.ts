import * as React from 'react'
import { DefaultTheme, StyledComponentProps } from 'styled-components'

export type SCProps<Component extends string | React.ComponentType<any>, Props extends {}> = StyledComponentProps<
  Component,
  DefaultTheme,
  Props,
  any
>
