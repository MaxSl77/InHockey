import React from "react";
import { StatusBar, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useLoadedFonts } from "./components/hooks/useLoadedFonts";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./navigation/appNavigationStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useLoadedFonts();

  if (!fontsLoaded && !fontError) {
    return <View style={{ flex: 1, backgroundColor: "black" }}></View>;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar />
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
