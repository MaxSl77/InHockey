import { StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";
import { Colors } from "../const/colors";

export const personalInfoStyle = StyleSheet.create({
  wrapper: {},

  personInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    paddingHorizontal: scaleSize(50),
  },

  imageHeader: {},

  iconPlayer: {},

  imageaddFriend: {},

  avatarImage: {
    marginTop: scaleSize(-100),
  },

  profileName: {
    color: "#000",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 16,
    fontFamily: "SchibstedGrotesk-Bold",
  },

  profileFriendsCount: {
    color: "#A7A7A7",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
  },

  profileInfo: {},

  headerWrapper: {},
});
