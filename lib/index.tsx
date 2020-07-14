import * as React from "react";
import ButtonOriginal, { ButtonProps, ButtonType } from "antd/lib/button/button";

type Mod<T, R> = Omit<T, keyof R> & R;
const customTypeArray = [
    "success", 
    "warning", 
    "info", 
    "dark", 
    "lightdark", 
    "danger"
] as const; 
const customWithArray = [
    "link", 
    "dashed", 
    "ghost"
] as const; 
type typeProps = typeof customTypeArray[number];
type withProps = typeof customWithArray[number];
type ModButtonProps = Mod<ButtonProps, {
    type?: ButtonType | typeProps
}>;

type TButton = ModButtonProps & {
    with?: withProps;
    style?: React.CSSProperties;
}

const styleButton = {
    dashed: {
        borderStyle: "dashed"
    },
    ghost: {
        borderStyle: "solid"
    },
    link: {
        borderStyle: "none",
        boxShadow: "none",
        borderColor: "transparent"
    }
}

const disableAnimation: string = "disable-animation";

const Button = React.forwardRef((props: TButton, ref: any) => {
    const _isLink = props.with === 'link';
    const _isDashed = props.with === 'dashed';
    const _isGhost = props.with === 'ghost';
    const _type: any = props.type;
    const _ghost: boolean = _isDashed || _isGhost || _isLink || props.ghost? true : false;
    const _style = props.with ? styleButton[props.with] : undefined;
    const _linkStyle = _isLink ? disableAnimation : undefined;
    const _classes = [_linkStyle, props.className].filter(x => !!x).join(' ');
    return (
        <ButtonOriginal {...props} ref={ref} className={_classes} style={{..._style, ...props.style}} ghost={_ghost} type={_type}>
            {props.children}
        </ButtonOriginal>
    )
});

export default Button;