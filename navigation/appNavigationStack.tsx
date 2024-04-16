import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNames } from "../types/stackNames";
import { EnterStack } from "./enterNavigationStack";
import { BottomTabStack } from "./bottomTabNavigationStack";

export type AppStackParamList = {
  EnterStack: undefined;
  BottomTabStack: undefined;
};

const AppNavigator = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator.Navigator>
        <AppNavigator.Screen
          name={StackNames.ENTER_STACK}
          component={EnterStack}
          options={{ headerShown: false }}
        />
        <AppNavigator.Screen
          name={StackNames.BOTTOM_TAB_STACK}
          component={BottomTabStack}
          options={{ headerShown: false }}
        />
      </AppNavigator.Navigator>
    </SafeAreaProvider>
  );
};
