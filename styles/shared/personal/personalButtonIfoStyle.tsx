import { StyleSheet } from "react-native";
import { scaleSize } from "../../../utilities";
import { Colors } from "../../const/colors";

export const personalButtonInfoStyle = StyleSheet.create({
    buttonsWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.GRAY,
        paddingHorizontal: scaleSize(40),
        paddingVertical: scaleSize(20),
    },
});