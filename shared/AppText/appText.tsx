import { FC } from "react"
import Animated from "react-native-reanimated"
import { StyleProp, TextStyle } from "react-native"
import { Colors } from "../../styles/const/colors"
import { TEXT_VARIANT } from "./types"
import { appTextStyles } from "../../styles/shared/AppText/appTextStyles"

interface AppTextProps {
    style?: StyleProp<TextStyle>,
    variant: TEXT_VARIANT,
    text?: string | number,
    color?: string,
    children?: React.ReactNode,
    onPress?: ()=>void,
}

export const AppText: FC<AppTextProps> = ({style, variant = TEXT_VARIANT.BODY_MEDIUM, children, text, color = Colors.WHITE, onPress, ...props}) => {
    return (
        <Animated.Text {...props} onPress={onPress} style={[appTextStyles[variant], {color: color}, style]}>
            {text ?? children ?? 'Hello World!'}
        </Animated.Text>
    )
}