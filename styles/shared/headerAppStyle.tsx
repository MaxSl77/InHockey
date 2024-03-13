import { StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";
import { Colors } from "../const/colors";

export const headerAppStyle = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: 100,
    backgroundColor: Colors.GRAY,
  },

  backgroundImage: {
    width: "100%",
    height: 200,
  },

  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 20,
  },

  avatarImage: {
    width: scaleSize(70),
    height: scaleSize(70),
    borderRadius: 50,
  },

  imageBack: {
    width: scaleSize(70),
    height: scaleSize(70),
  },

  imageLupa: {
    width: scaleSize(60),
    height: scaleSize(60),
  },

  imageInHockey: {
    width: scaleSize(125),
    height: scaleSize(125),
  },

  imageNotifications: {
    width: scaleSize(70),
    height: scaleSize(70),
  },

  imageAdd: {
    width: scaleSize(60),
    height: scaleSize(60),
  },
});
