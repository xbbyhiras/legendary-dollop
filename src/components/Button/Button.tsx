import * as React from 'react'
import { ButtonProps } from 'antd'

import * as Styled from './Button.styled'

export type TButtonProps = ButtonProps & {
  hideContents?: boolean
  children?: React.ReactNode
}

export const Button = ({ hideContents, children, ...rest }: TButtonProps) => {
  // Currently, theme's boxShadow doesn't seem to successfully override, so we're forcing the style
  return (
    <Styled.Button style={{ boxShadow: 'none' }} {...rest} $hideContents={hideContents}>
      <Styled.Content $hidden={hideContents}>{children}</Styled.Content>
    </Styled.Button>
  )
}

export default Button
