import { StyleSheet } from "react-native";
import { scaleSize } from "../../../../utilities";
import { Colors } from "../../../const/colors";

export const personalHockeyStick = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: scaleSize(40),
        paddingVertical: scaleSize(20),
    },

});
