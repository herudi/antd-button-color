import * as React from "react";
import ButtonOriginal, { ButtonProps } from "antd/lib/button/button";

type Mod<T, R> = Omit<T, keyof R> & R;
type TButton = Mod<ButtonProps, {
    type?: "default" | "primary" | "ghost" | "dashed" | "link" | "text" | "success" | "warning" | "info" | "danger"
}>;

const Button = (props: TButton) => {
    const _type: any = props.type;
    return (
        <ButtonOriginal {...props} type={_type} />
    )
};

export default Button;