import React, { FC } from "react";
import { StyleProp, ViewStyle, TouchableOpacity } from "react-native";
import { Colors } from "../../styles/const/colors";
import { buttonStyle } from "../../styles/shared/Button/buttonStyle";
import { AppText } from "../AppText/appText";
import { TEXT_VARIANT } from "../AppText/types";
import { BUTTON_VARIANT } from "./types";

type ButtonProps = {
    text?: string,
    disabled?: boolean,
    variant?: BUTTON_VARIANT,
    style?: StyleProp<ViewStyle>,
    onPress: () => void,
    textVariant?: TEXT_VARIANT,
};

const textColors = {
    [BUTTON_VARIANT.ORANGE]: Colors.WHITE,
    [BUTTON_VARIANT.LIGHT_BLUE]: Colors.WHITE,
    [BUTTON_VARIANT.DARK]: Colors.WHITE,
    [BUTTON_VARIANT.BLUE]: Colors.WHITE,
};

export const Button: FC<ButtonProps> = (props) => {
    const {disabled, style, onPress, text, variant=BUTTON_VARIANT.DARK, textVariant=TEXT_VARIANT.HEADER_LARGE} = props;
    return (
        <TouchableOpacity disabled={disabled} style={[buttonStyle.container, buttonStyle[variant], style]} onPress={onPress}>
            <AppText variant={textVariant} color={textColors[variant]} text={text} />
        </TouchableOpacity>
    )
}