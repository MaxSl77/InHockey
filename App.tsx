import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, ViewBase } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useLoadedFonts } from "./components/hooks/useLoadedFonts";
import { ChoosePositionScreen } from "./components/screens/LogInSignIn/SignIn/choosePositionScreen/choosePositionScreen";
import { LogInScreen } from "./components/screens/LogInSignIn/LogIn/logInScreen";
import { SignInPlayerBaseScreen } from "./components/screens/LogInSignIn/SignIn/SignInScreens/SignInPlayerScreens/signInPlayerBaseScreen";
import { SignInPlayerAddScreen } from "./components/screens/LogInSignIn/SignIn/SignInScreens/SignInPlayerScreens/signInPlayerAddScreen";
import { SignInPlayerSecondAddScreen } from "./components/screens/LogInSignIn/SignIn/SignInScreens/SignInPlayerScreens/signInPlayerSecondAddScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useLoadedFonts();

  if (!fontsLoaded && !fontError) {
    return <View style={{ flex: 1, backgroundColor: "black" }}></View>;
  }

  return (
    <SafeAreaView>
      {/* <ChoosePositionScreen /> */}
      {/* <LogInScreen /> */}
      {/* { <SignInPlayerBaseScreen /> } */}
      {/* {<SignInPlayerAddScreen />} */}
      {/* {<SignInPlayerSecondAddScreen />} */}
    </SafeAreaView>
  );
}
