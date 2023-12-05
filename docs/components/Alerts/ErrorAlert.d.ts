import { AlertProps } from 'antd';
type TErrorAlertProps = Required<Pick<AlertProps, 'message'>>;
/**
 * @param message {React.ReactNode} Content of Alert
 * @returns React.ReactNode
 */
export declare const ErrorAlert: (props: TErrorAlertProps) => import("react/jsx-runtime").JSX.Element;
export {};
