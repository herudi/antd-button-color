import * as React from "react";
import Button, { ButtonProps } from "antd/lib/button/button";

type Mod<T, R> = Omit<T, keyof R> & R;
type TButton = Mod<ButtonProps, {
    type?: "default" | "primary" | "ghost" | "dashed" | "link" | "text" | "success" | "warning" | "info"
}>;

export default (props: TButton) => {
    const _type: any = props.type;
    return (
        <Button {...props} type={_type} />
    )
};