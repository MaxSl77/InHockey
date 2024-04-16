import React from "react";
import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-paper";


export default function FriendsHeader() {
  return (
    <View style={styles.container}>
    <TextInput
      placeholder="Search..."
      style={styles.input}
    />
    <Icon source={require('../../../assets/search icon.png')} size={20} color="#000" />
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 50,
      borderColor: 'orange',
      borderWidth: 1,
      paddingHorizontal: 15,
    },
    input: {
      flex: 1,
      paddingVertical: 10,
      paddingRight: 10,
      paddingLeft: 0,
      color: '#424242',
    },
    icon: {
      padding: 10,
    },
  });
