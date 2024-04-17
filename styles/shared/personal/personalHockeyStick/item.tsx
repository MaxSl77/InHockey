import { StyleSheet } from "react-native";
import { scaleSize } from "../../../../utilities";
import { Colors } from "../../../const/colors";

export const item = StyleSheet.create({
    text: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderBottomColor: Colors.GRAY,
    }

});
