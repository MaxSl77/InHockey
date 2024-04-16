import { StyleSheet } from "react-native";

export const usersListStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingIndicator: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 10,
  },
  firstName: { fontSize: 22, fontWeight: "700" },
  lastName: { fontSize: 18, opacity: 0.7 },
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
