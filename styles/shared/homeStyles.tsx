import { Dimensions, StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";
import { Colors } from "../const/colors";

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.WHITE,
    },
    postContainer: {
        marginBottom: 20,
        paddingHorizontal: scaleSize(40),
        paddingVertical: scaleSize(40),
        backgroundColor: Colors.WHITE,
        borderRadius: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    timestamp: {
        color: '#777',
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    postDetails: {
        padding: 10,
    },
    likesCommentsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    likesCommentsContainerFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    iconText: {
        marginRight: 10,
        color: '#555',
    },
});
