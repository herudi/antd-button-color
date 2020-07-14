import * as React from "react";
import { ButtonProps, ButtonType } from "antd/lib/button/button";
declare type Mod<T, R> = Omit<T, keyof R> & R;
declare const customTypeArray: readonly ["success", "warning", "info", "dark", "lightdark", "danger"];
declare const customWithArray: readonly ["link", "dashed", "ghost"];
declare type typeProps = typeof customTypeArray[number];
declare type withProps = typeof customWithArray[number];
declare type ModButtonProps = Mod<ButtonProps, {
    type?: ButtonType | typeProps;
}>;
declare type TButton = ModButtonProps & {
    with?: withProps;
    style?: React.CSSProperties;
};
declare const Button: (props: TButton) => JSX.Element;
export default Button;
