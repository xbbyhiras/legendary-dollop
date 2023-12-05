import * as React from "react";
import { ButtonProps } from "antd";
export type TButtonProps = ButtonProps & {
    /**
     * If true, the button's contents will be hidden
     */
    hideContents?: boolean;
    /**
     * The button's contents
     */
    children?: React.ReactNode;
};
export declare const Button: ({ hideContents, children, ...rest }: TButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
