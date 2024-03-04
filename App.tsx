import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useLoadedFonts } from "./components/hooks/useLoadedFonts";
import { ChoosePositionScreen } from "./components/screens/LogInSignIn/SignIn/choosePositionScreen/choosePositionScreen";
import { LogInScreen } from "./components/screens/LogInSignIn/LogIn/logInScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useLoadedFonts();

  if (!fontsLoaded && !fontError) {
    return <View style={{ flex: 1, backgroundColor: "black" }}></View>;
  }

  return (
    <SafeAreaView>
      {/* <LogInScreen /> */}
      <ChoosePositionScreen />
    </SafeAreaView>
  );
}
