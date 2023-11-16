import React from 'react'

import { render } from '../../test-utils'
import { Button, TButtonProps } from '.'

describe('Button Component', () => {
  const testContent = 'Test Button Content'
  const renderComponent = (props: TButtonProps = {}, roleOpts = {}) =>
    render(<Button {...props}>{testContent}</Button>).getByRole('button', roleOpts)

  describe('accessibility', () => {
    it('should still be accessible when content hidden', () => {
      const button = renderComponent({ hideContents: true }, { name: testContent })

      expect(button).toBeTruthy()
    })
  })
})
