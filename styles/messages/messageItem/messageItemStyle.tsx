import { StyleSheet } from "react-native";
import { Colors } from "../../const/colors";
import { scaleSize } from "../../../utilities";

export const messageItemStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  personWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: scaleSize(10)
  },
  nameWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  messageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  loadingIndicator: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 10,
  },
  message: {
    color: Colors.BLACK,
    fontSize: 14,
  },
  time: {
    color: Colors.BLACK,
    fontSize: 14,
  },
  firstName: { fontSize: 18, },
  lastName: { fontSize: 18, },
  onlineIndicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "green",
    position: "absolute",
    borderWidth: 2,
    borderColor: "#fff",
    top: 45,
    left: 50,
  },
});
