import { ScreenNames } from "../types/screenNames";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreen } from "../components/screens/usersInterfaceScreens/homeScreen";
import { MessagesScreen } from "../components/screens/usersInterfaceScreens/messagesScreen";
import { ProfileScreen } from "../components/screens/usersInterfaceScreens/profileScreen";
import { FriendsScreen } from "../components/screens/usersInterfaceScreens/friendsScreen";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../styles/const/colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export type RootNavigatorStackParams = {
  EnterStack: { screen: ScreenNames };
  Home: undefined;
  Friends: undefined;
  Messages: undefined;
  Profile: undefined;
};

const RootTab = createMaterialTopTabNavigator<RootNavigatorStackParams>();

export const BottomTabStack = () => {
  return (
    <SafeAreaProvider>
      <RootTab.Navigator
        initialRouteName="Home"
        tabBarPosition='bottom'
        screenOptions={{animationEnabled: false ,tabBarStyle: { backgroundColor: Colors.PRIMARY }, tabBarInactiveTintColor: Colors.WHITE, tabBarActiveTintColor: Colors.BLACK, tabBarIndicatorStyle: { height: 0 }}}
      >
        <RootTab.Screen
          name={ScreenNames.HOME}
          component={HomeScreen}
          options={{
            swipeEnabled: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={25} />
            ),
          }}
        />
        <RootTab.Screen
          name={ScreenNames.MESSAGES}
          component={MessagesScreen}
          options={{
            swipeEnabled: false,
            tabBarLabel: "Messages",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chat" color={color} size={25} />
            ),
          }}
        />
        <RootTab.Screen
          name={ScreenNames.FRIENDS}
          component={FriendsScreen}
          options={{
            swipeEnabled: false,
            tabBarLabel: "Friends",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='account-group-outline' color={color} size={25} />
            ),
          }}
        />
        <RootTab.Screen
          name={ScreenNames.PROFILE}
          component={ProfileScreen}
          options={{
            swipeEnabled: false,
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='account-circle-outline' color={color} size={25} />
            ),
          }}
        />
      </RootTab.Navigator>
    </SafeAreaProvider>
  );
};
