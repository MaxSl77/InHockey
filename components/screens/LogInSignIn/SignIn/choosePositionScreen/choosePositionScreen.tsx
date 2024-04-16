import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { EnterStackParamList } from "../../../../../navigation/enterNavigationStack";
import { TEXT_VARIANT } from "../../../../../shared/AppText/types";
import { Button } from "../../../../../shared/buttons/button";
import { BUTTON_VARIANT } from "../../../../../shared/buttons/types";
import { HeaderLoginInSignIn } from "../../../../../shared/headerLoginSignIn/headerLoginSignIn";
import { choosePositionScreenStyle } from "../../../../../styles/screens/choosePositionScreenStyle";
import { ScreenNames } from "../../../../../types/screenNames";

interface ChoosePositionScreenProps {
  navigation: NativeStackNavigationProp<EnterStackParamList>;
}

export const ChoosePositionScreen = ({
  navigation,
}: ChoosePositionScreenProps) => {
  const goToPlayerSignInBaseScreen = () => {
    navigation.navigate(ScreenNames.SIGN_IN_PLAYER_BASE);
  };
  const goToLogInScreen = () => {
    navigation.navigate(ScreenNames.LOG_IN);
  };
  return (
    <SafeAreaView>
      <View>
        <HeaderLoginInSignIn />
        <View style={choosePositionScreenStyle.container}>
          <View style={choosePositionScreenStyle.buttonContainer}>
            <Button
              text={"Player"}
              onPress={goToPlayerSignInBaseScreen}
              variant={BUTTON_VARIANT.LIGHT_BLUE}
              style={choosePositionScreenStyle.button}
            ></Button>
            <Button
              text={"Scout"}
              onPress={() => {}}
              variant={BUTTON_VARIANT.LIGHT_BLUE}
              style={choosePositionScreenStyle.button}
            ></Button>
            <Button
              text={"Staff"}
              onPress={() => {}}
              variant={BUTTON_VARIANT.LIGHT_BLUE}
              style={choosePositionScreenStyle.button}
            ></Button>
            <Button
              text={"LogIn"}
              onPress={goToLogInScreen}
              variant={BUTTON_VARIANT.ORANGE}
              style={choosePositionScreenStyle.button}
            ></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
