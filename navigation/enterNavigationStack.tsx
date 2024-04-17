import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScreenNames } from "../types/screenNames";
import { ChoosePositionScreen } from "../components/screens/LogInSignIn/SignIn/choosePositionScreen/choosePositionScreen";
import { LogInScreen } from "../components/screens/LogInSignIn/LogIn/logInScreen";
import { SignInPlayerBaseScreen } from "../components/screens/LogInSignIn/SignIn/SignInScreens/SignInPlayerScreens/signInPlayerBaseScreen";
import { SignInPlayerAddScreen } from "../components/screens/LogInSignIn/SignIn/SignInScreens/SignInPlayerScreens/signInPlayerAddScreen";
import { SignInPlayerSecondAddScreen } from "../components/screens/LogInSignIn/SignIn/SignInScreens/SignInPlayerScreens/signInPlayerSecondAddScreen";
import { HomeScreen } from "../components/screens/usersInterfaceScreens/homeScreen";
import { PhotosScreen } from "../components/screens/usersInterfaceScreens/photosScreen";
import PersonalPhotos from "../shared/personalInfo/personalPhotos/personalPhotos";

export type EnterStackParamList = {
  ChoosePosition: undefined;
  LogIn: undefined;
  SignInPlayerBase: undefined;
  SignInPlayerAdd: undefined;
  SignInPlayerSecondAdd: undefined;
  Home: undefined;
  Photos: undefined;
  BottomTabStack: { screen: ScreenNames };
};

const EnterNavigator = createNativeStackNavigator<EnterStackParamList>();

export const EnterStack = () => {
  return (
    <SafeAreaProvider>
      <EnterNavigator.Navigator
        initialRouteName={ScreenNames.CHOOSE_POSITION}
        screenOptions={{ animation: "ios" }}
      >
        <EnterNavigator.Screen
          name={ScreenNames.CHOOSE_POSITION}
          component={ChoosePositionScreen}
          options={{ headerShown: false }}
        />
        <EnterNavigator.Screen
          name={ScreenNames.LOG_IN}
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <EnterNavigator.Screen
          name={ScreenNames.SIGN_IN_PLAYER_BASE}
          component={SignInPlayerBaseScreen}
          options={{ headerShown: false }}
        />
        <EnterNavigator.Screen
          name={ScreenNames.SIGN_IN_PLAYER_ADDITTIONAL}
          component={SignInPlayerAddScreen}
          options={{ headerShown: false }}
        />
        <EnterNavigator.Screen
          name={ScreenNames.SIGN_IN_PLAYER_ADDITTIONAL_CONTINUE}
          component={SignInPlayerSecondAddScreen}
          options={{ headerShown: false }}
        />
         <EnterNavigator.Screen
          name={ScreenNames.HOME}
          component={HomeScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
         <EnterNavigator.Screen
          name={ScreenNames.PHOTOS}
          component={PhotosScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </EnterNavigator.Navigator>
    </SafeAreaProvider>
  );
};
