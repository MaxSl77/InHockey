import { StyleSheet } from "react-native"
import { TEXT_VARIANT } from "../../../shared/AppText/types"
import { scaleSize } from "../../../utilities"

export const appTextStyles = StyleSheet.create({
    [TEXT_VARIANT.HEADER_LARGE]: {
    fontFamily: "SchibstedGrotesk-Bold",
    fontWeight: "700",
    fontSize: scaleSize(36),
    },
    [TEXT_VARIANT.HEADER_MEDIUM]: {
    fontFamily: "SchibstedGrotesk-Regular",
    fontWeight: "600",
    fontSize: scaleSize(24),
    },
    [TEXT_VARIANT.HEADER_SMALL]: {
    fontFamily: "SchibstedGrotesk-Regular",
    fontWeight: "400",
    fontSize: scaleSize(16),
    },
    [TEXT_VARIANT.BODY_MEDIUM]: {
    fontFamily: "SchibstedGrotesk-Regular",
    fontWeight: "400",
    fontSize: scaleSize(14),
    },
})