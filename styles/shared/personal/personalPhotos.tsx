import { StyleSheet } from "react-native";
import { scaleSize } from "../../../utilities";
import { Colors } from "../../const/colors";

export const personalPhotos = StyleSheet.create({
    wrapper: {
        flexGrow: 1,
        paddingHorizontal: scaleSize(40),
        paddingVertical: scaleSize(20),
    },

    photoWrapper: {
        paddingHorizontal: scaleSize(80),
        paddingVertical: scaleSize(80),
        marginHorizontal: scaleSize(80),
        marginVertical: scaleSize(40),
        backgroundColor: Colors.WHITE,
        alignItems: 'center'
    },

    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },

    photosPreview: {
        position: 'relative',
        width: 150,
        height: 200
    },

    photo: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    firstPhoto: {},

    secondPhoto: {
        top: 10,
        left: 10,
        zIndex: 0,
    }
});
