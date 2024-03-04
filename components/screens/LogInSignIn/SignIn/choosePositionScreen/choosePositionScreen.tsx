import React from "react";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { TEXT_VARIANT } from "../../../../../shared/AppText/types";
import { Button } from "../../../../../shared/buttons/button";
import { BUTTON_VARIANT } from "../../../../../shared/buttons/types";
import { HeaderLoginInSignIn } from "../../../../../shared/headerLoginSignIn/headerLoginSignIn";
import { choosePositionScreenStyle } from "../../../../../styles/screens/choosePositionScreenStyle";

export const ChoosePositionScreen = () => {
  return (
    <>
      <HeaderLoginInSignIn />
      <View style={choosePositionScreenStyle.container}>
          <View style={choosePositionScreenStyle.buttonContainer}>
            <Button
              text={"Player"}
              onPress={() => {}}
              variant={BUTTON_VARIANT.LIGHT_BLUE}
            ></Button>
            <Button
              text={"Scout"}
              onPress={() => {}}
              variant={BUTTON_VARIANT.LIGHT_BLUE}
            ></Button>
            <Button
              text={"Staff"}
              onPress={() => {}}
              variant={BUTTON_VARIANT.LIGHT_BLUE}
            ></Button>
            <Button
              text={"LogIn"}
              onPress={() => {}}
              variant={BUTTON_VARIANT.ORANGE}
            ></Button>
          </View>
        </View>
    </>
  );
};
