import React from "react"
import { View, Text } from "react-native"
import { headerLoginInSignInStyles } from "../../styles/shared/headerLoginSignInStyles"

export const HeaderLoginInSignIn = () => {
    const text = 'inhockey';
    const modifiedText = text.charAt(0).toUpperCase() + text.charAt(1) + text.charAt(2).toUpperCase() + text.slice(3);
    return (
        <View style={headerLoginInSignInStyles.wrapper}>
            <Text style={headerLoginInSignInStyles.headerTextStyle}>{modifiedText}</Text>
        </View>
    )
}