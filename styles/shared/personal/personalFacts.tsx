import { StyleSheet } from "react-native";
import { scaleSize } from "../../../utilities";
import { Colors } from "../../const/colors";

export const personalFactsStyle = StyleSheet.create({
    wrapper: {
        flexGrow: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: scaleSize(40),
        paddingVertical: scaleSize(20),
    },
    personFactsWrapper: {
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: Colors.WHITE,
    },
    personTextWrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        marginBottom: scaleSize(10),
    },
    bold: {
        fontWeight: 'bold',
        marginRight: scaleSize(10)
    },

    name: {
        fontWeight: 'bold',
        color: Colors.PRIMARY,
        fontSize: 24,
        marginBottom: scaleSize(20),
    },

    progressBar: {
        backgroundColor: Colors.GRAY,
        width: '100%',
        height: 25,
        borderRadius: 20,
        marginBottom: 10,
    },
    percentage: {
        fontSize: 18,
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -20 }],
        color: 'white',
        fontWeight: 'bold',

    },
});
