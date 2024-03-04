import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export function useLoadedFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState(null);

  useEffect(() => {
    async function prepare() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "roboto-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
          "inter-black": require("../../assets/fonts/Inter-Black.ttf"),
          "inter-bold": require("../../assets/fonts/Inter-Bold.ttf"),
          "SchibstedGrotesk-Regular": require("../../assets/fonts/SchibstedGrotesk-Regular.ttf"),
          "SchibstedGrotesk-Bold": require("../../assets/fonts/SchibstedGrotesk-Bold.ttf"),
        });

        setFontsLoaded(true);
      } catch (e: any) {
        console.warn(e);
        setFontError(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return [fontsLoaded, fontError];
}
