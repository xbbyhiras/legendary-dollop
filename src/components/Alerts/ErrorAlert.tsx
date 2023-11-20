import { Alert, AlertProps } from 'antd'

type TErrorAlertProps = Required<Pick<AlertProps, 'message'>>
/**
 * @param message {React.ReactNode} Content of Alert
 * @returns React.ReactNode
 */
export const ErrorAlert = (props: TErrorAlertProps) => <Alert {...props} type="error" closable showIcon />
