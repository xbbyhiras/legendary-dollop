import { InfoCircleOutlined } from '../Icon/icons'
import { AlertSpan } from './AlertSpan'

type InlineAlertProps = {
  message: string
  type?: 'warning' | 'error'
}

export const InlineAlert = ({ message, type = 'warning' }: InlineAlertProps) => (
  <AlertSpan $type={type}>
    <InfoCircleOutlined /> {message}
  </AlertSpan>
)
