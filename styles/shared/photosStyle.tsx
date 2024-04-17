import { Dimensions, StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";
import { Colors } from "../const/colors";

export const photosStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    postContainer: {
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    postDetails: {
        padding: 10,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    likesCommentsContainer: {
        flexDirection: 'row',
    },
    likesComments: {
        marginRight: 10,
        color: '#555',
    },
});